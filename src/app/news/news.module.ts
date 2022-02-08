import {NgModule} from "@angular/core";
import {NewsComponent} from "./news.component";
import {NewsRoutingModule} from "./news.routing.module";
import {NewsService} from "./news.service";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../__shared/shared.module";
import {TopicComponent} from "./topic/topic.component";
import {DetailsComponent} from "./details/details.component";
import {TopicListComponent} from "./topic-list/topic-list.component";

@NgModule({
  declarations: [
    NewsComponent,
    TopicComponent,
    DetailsComponent,
    TopicListComponent
  ],
  imports: [
    NewsRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [NewsService],
  exports: [
    NewsComponent,
    TopicComponent,
    DetailsComponent,
    TopicListComponent
  ]
})

export class NewsModule {

}
