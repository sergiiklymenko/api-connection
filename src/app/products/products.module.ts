import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products.routing.module";
import {ProductsService} from "./products.service";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../__core/core.module";
import {ItemService} from "../__core/itemService/item.service";
import {ProductCardComponent} from "./product-card/product-card.component";

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, ProductsRoutingModule, CoreModule],
  providers: [ProductsService, ItemService],
  exports: [ProductsComponent, ProductCardComponent]
})

export class ProductsModule {

}

