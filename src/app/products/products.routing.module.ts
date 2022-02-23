import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductsComponent} from "./products.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'products',
      component: ProductsComponent
    }
  ])],
  exports: [RouterModule]
})

export class ProductsRoutingModule {

}
