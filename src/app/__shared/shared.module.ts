import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContainerComponent} from "./container/container.component";
import {MenuComponent} from "./menu/menu.component";
import {AnchorComponent} from "./anchor/anchor.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {DisqusComponent} from "./disqus/disqus.component";
import {DisqusModule} from "ngx-disqus";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MenuComponent,
    AnchorComponent,
    BreadcrumbComponent,
    DisqusComponent
  ],
  imports: [DisqusModule.forRoot('serg-3')],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MenuComponent,
    AnchorComponent,
    BreadcrumbComponent,
    DisqusComponent
  ]
})

export class SharedModule {

}
