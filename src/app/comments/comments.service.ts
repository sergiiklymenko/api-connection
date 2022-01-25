import {Injectable} from "@angular/core";
import {HttpClientService} from "../__core/httpClient/http-client.service";

@Injectable()

export class CommentsService {

  constructor(private httpClientService: HttpClientService) {
  }

  getComments() {
    return this.httpClientService.get('https://gorest.co.in/public/v1/comments');
  }


}
