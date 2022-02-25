import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CartItemsComponent} from "./cart-items.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'cart-items',
      component: CartItemsComponent
    }
    ]
  )]
})

export class CartItemsRoutingModule {

}
