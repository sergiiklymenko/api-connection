import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContainerComponent} from "./container/container.component";
import {MenuComponent} from "./menu/menu.component";
import {AnchorComponent} from "./anchor/anchor.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MenuComponent,
    AnchorComponent,
    BreadcrumbComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MenuComponent,
    AnchorComponent,
    BreadcrumbComponent
  ]
})

export class SharedModule {

}
