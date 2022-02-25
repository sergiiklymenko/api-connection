import {NgModule} from "@angular/core";
import {CartComponent} from "./cart.component";
import {CartRoutingModule} from "./cart.routing.module";
import {CommonModule} from "@angular/common";
import {CartItemsComponent} from "../../cart-items/cart-items.component";

@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [CommonModule, CartRoutingModule]
})

export class CartModule {

}
