import {Injectable} from "@angular/core";
import {HttpClientService} from "../__core/httpClient/http-client.service";

@Injectable()

export class NewsService {

  constructor(private httpService: HttpClientService) {
  }

  getNews() {
    return this.httpService.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-01&sortBy=publishedAt&apiKey=e286d4565d1b40b5b1cadf4dca9d1d68');
  }
}
