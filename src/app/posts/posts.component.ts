import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {RxjsService} from "../__core/rxjs/rxjs.service";
import {from, interval, map, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor(private router: Router,
              private rxjsService: RxjsService) {
  }

  ngOnInit() {
    console.log('PostOnInit');
    this.redirect()
    console.log('PostOnInit');
    // this.rxjsService.getRequest('https://dodevcode.com:4488/other/ConfigData').subscribe((data) => {
    //   console.log('This is subscriber data: ', data);
    // })
    // this.ofOperator();
    // this.mapOperator();
    // this.tapOperator();
    this.subscriptionTest();
  }

  redirect() {
    if (this.router.url === '/posts') {
      this.router.navigateByUrl('posts/list');
    }
  }

  ofOperator() {
    const arr = [1, 2, 3, 4, 5];
    const arr$ = from(arr);

    arr$.pipe(map((value) => {
      console.log('Value of: ', + value);
    })).subscribe((values: any) => {
      console.log(`Emitted Values: `, values)
      // console.log(typeof values);
    });
  }

  mapOperator() {
    const examplePromise = new Promise((resolve, reject) => {
      // Do some async code and resolve and object with an id property
      return resolve({ id: 1 });
    });

    const promise$ = from(examplePromise);
    promise$
      .pipe(map((obj: any) => obj.id))
      .subscribe((value) => console.log(`Emitted Values: `, value));
  }

  tapOperator() {

    const arr = [1, 2, 3];

    const fromArr$ = from(arr);

    fromArr$
      .pipe(tap((value) => console.log("Received value: ", value)))
      .subscribe((value) => console.log(`Emitted Values: `, value));
  }

  subscriptionTest() {
    const observable1 = interval(400);
    const observable2 = interval(300);

    const subscription = observable1.subscribe(x => console.log('first: ' + x));
    const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

    subscription.add(childSubscription);

    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription
      subscription.unsubscribe();
    }, 1000);
  }

}

