import {NgModule} from "@angular/core";
import {NewsComponent} from "./news.component";
import {NewsRoutingModule} from "./news.routing.module";
import {NewsService} from "./news.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [NewsComponent],
  imports: [NewsRoutingModule, CommonModule],
  providers: [NewsService],
  exports: [NewsComponent]
})

export class NewsModule {

}
