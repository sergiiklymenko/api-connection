import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()

export class HttpClientService {
  private TYPE_GET = 1;
  private TYPE_POST = 2;
  private TYPE_PUT = 3;
  private TYPE_DELETE = 4;
  private TYPE_HEAD = 5;

  constructor(private http: HttpClient) {

  }

  private doRequest(type: number, path = '', body = '', options = {}, isPromise = false): Observable<any> {
    let reqResult: any;
    switch (type) {
      case this.TYPE_POST:
        reqResult = this.http.post(path, body, options);
        break;
      case this.TYPE_PUT:
        reqResult = this.http.put(path, body, options);
        break;
      case this.TYPE_DELETE:
        reqResult = this.http.delete(path, options);
        break;
      case this.TYPE_HEAD:
        reqResult = this.http.head(path, options);
        break;
      default:
        reqResult = this.http.get(path, options);
        break;
    }

      return isPromise? reqResult.toPromise() : reqResult;
  }

  get(path = '', options = {}, isPromise = false) {
    return this.doRequest(this.TYPE_GET, path, '', options, isPromise);
  }

  post(path = '', body = '', options = {}): Observable<Object>{
    return this.doRequest(this.TYPE_POST, path, body, options);
  }

  put(path = '', body = '', options = {}) {
    return this.doRequest(this.TYPE_PUT, path, body, options);
  }

  delete(path = '', options = {}) {
    return this.doRequest(this.TYPE_DELETE, path, '', options);
  }

  head(path = '', options = {}) {
    return this.doRequest(this.TYPE_HEAD, path, '', options);
  }


}
