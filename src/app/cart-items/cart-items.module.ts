import {NgModule} from "@angular/core";
import {CartItemsComponent} from "./cart-items.component";
import {CartItemsRoutingModule} from "./cart-items.routing.module";
import {ProductsModule} from "../products/products.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CartItemsComponent],
  imports: [CommonModule, CartItemsRoutingModule, ProductsModule],
  exports: [CartItemsComponent]
})

export class CartItemsModule {

}
