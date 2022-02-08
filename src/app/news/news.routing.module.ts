import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NewsComponent} from "./news.component";
import {TopicListComponent} from "./topic-list/topic-list.component";
import {DetailsComponent} from "./details/details.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'news',
      redirectTo: 'news/topic-list',
    },
    {
      path: 'news/topic-list',
      component: TopicListComponent
    },
    {
      path: 'news/:id/details',
      component: DetailsComponent
    }
  ])],
  exports: [RouterModule]
})

export class NewsRoutingModule {

}
