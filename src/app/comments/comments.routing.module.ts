import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommentsComponent} from "./comments.component";
import {DetailsComponent} from "./details/details.component";

@NgModule({
  imports: [RouterModule.forRoot([
      {
        path: 'comments',
        component: CommentsComponent,
      },
      {
        path: 'comments/:id/details',
        component: DetailsComponent
      }
    ]
  )],
  exports: [RouterModule]
})

export class CommentsRoutingModule {

}
