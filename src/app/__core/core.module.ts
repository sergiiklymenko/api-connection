import {NgModule} from "@angular/core";
import {HttpClientService} from "./httpClient/http-client.service";
import {StorageService} from "./storage/storage.service";

@NgModule({
  providers: [HttpClientService, StorageService],
})

export class CoreModule {

}
