import {NgModule} from "@angular/core";
import {HttpClientService} from "./httpClient/http-client.service";
import {StorageService} from "./storage/storage.service";
import {RxjsService} from "./rxjs/rxjs.service";
import {BroadcasterService} from "./broadcaster/broadcaster.service";
import {UserService} from "./userService/user.service";
import {ItemService} from "./itemService/item.service";

@NgModule({
  providers: [
    HttpClientService,
    StorageService,
    RxjsService,
    BroadcasterService,
    UserService,
    ItemService
  ],
})

export class CoreModule {

}
