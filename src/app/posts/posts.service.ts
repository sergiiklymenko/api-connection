import {Injectable, EventEmitter} from "@angular/core";
import {HttpClientService} from "../__core/httpClient/http-client.service";
import {Subject} from "rxjs";

@Injectable()

export class PostsService {

  // messageEmitter = new EventEmitter<String>();
  messageEmitter = new Subject<String>();


  constructor(private httpClientService: HttpClientService) {
  }

  getPosts() {
    return this.httpClientService.get('https://gorest.co.in/public/v1/posts')
  }

  emitValue(msg: any) {
   this.messageEmitter.next(msg);
   console.log(msg);
  }


}
