import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';

@Injectable()

export class RxjsService {

  testService() {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('Here is the new value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('This should be in a second');
      }
    });
    console.log('just after subscribe');
  }

  getRequest(url: string) {
    return new Observable(subscriber => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (this.status == 200) {
          console.log('XXX');
          subscriber.next(this.response);
          subscriber.complete();
        } else {
          console.log('FFF')
          let error = new Error(this.statusText);
          subscriber.error(error)
        }
      };
      xhr.onerror = function () {
        console.log('ZZZ')
        subscriber.error(new Error('Network Error'));
      };
      xhr.send();
    });
  }

}
