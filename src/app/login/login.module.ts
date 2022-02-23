import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login.routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, FormsModule]
})

export class LoginModule {

}
