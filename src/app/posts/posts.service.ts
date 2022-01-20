import {Injectable} from "@angular/core";
import {HttpClientService} from "../__core/httpClient/http-client.service";

@Injectable()

export class PostsService {

  constructor(private httpClientService: HttpClientService) {
  }

  getPosts() {
    return this.httpClientService.get('https://gorest.co.in/public/v1/posts')
    }



}
