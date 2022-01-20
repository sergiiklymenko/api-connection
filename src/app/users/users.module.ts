import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {UsersRoutingModule} from "./users.routing.module";
import {UsersService} from "./users.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [UsersService],
  exports: [UsersComponent]
})

export class UsersModule {

}
