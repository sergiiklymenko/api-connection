import {Injectable} from "@angular/core";
import {HttpClientService} from "../__core/httpClient/http-client.service";

@Injectable()

export class UsersService {
  constructor(private httpClientService: HttpClientService) {
  }

  getUsers() {
    return this.httpClientService.get('https://gorest.co.in/public/v1/users')
  }
}
