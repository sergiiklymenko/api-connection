import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import { RouterModule} from "@angular/router";

@NgModule({
  imports: [
   RouterModule.forRoot([
     {
       path: 'login',
       component: LoginComponent
     }
   ])
  ]
})

export class LoginRoutingModule {

}
