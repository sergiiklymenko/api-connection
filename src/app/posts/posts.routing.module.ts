import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'posts',
      component: PostsComponent,
      children: [
        {
          path: 'list', component: ListComponent
        },
        {
          path: ':id', component: DetailsComponent
        }
      ]
    },
  ])],
  exports: [RouterModule]
})

export class PostsRoutingModule {

}
