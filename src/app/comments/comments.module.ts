import {NgModule} from "@angular/core";
import {CommentsComponent} from "./comments.component";
import {CommentsRoutingModule} from "./comments.routing.module";
import {CoreModule} from "../__core/core.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../__shared/shared.module";
import {CommentsService} from "./comments.service";
import {DetailsComponent} from "./details/details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CommentsComponent, DetailsComponent],
  imports: [CommentsRoutingModule, CommonModule, CoreModule, SharedModule, RouterModule],
  providers: [CommentsService],
  exports: [CommentsComponent, DetailsComponent]
})

export class CommentsModule {

}
