import {NgModule} from "@angular/core";
import {HttpClientService} from "./httpClient/http-client.service";
import {StorageService} from "./storage/storage.service";
import {RxjsService} from "./rxjs/rxjs.service";

@NgModule({
  providers: [HttpClientService, StorageService, RxjsService],
})

export class CoreModule {

}
