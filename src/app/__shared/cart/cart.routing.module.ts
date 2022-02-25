import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CartComponent} from "./cart.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'cart',
      component: CartComponent
    }
    ])
  ]
})

export class CartRoutingModule {

}
