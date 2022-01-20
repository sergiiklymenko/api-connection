import {NgModule} from "@angular/core";
import {PostsComponent} from "./posts.component";
import {PostsRoutingModule} from "./posts.routing.module";
import {CardComponent} from "./card/card.component";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../__core/core.module";
import {PostsService} from "./posts.service";
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";
import {SharedModule} from "../__shared/shared.module";

@NgModule({
  declarations: [PostsComponent, CardComponent, DetailsComponent, ListComponent],
  imports: [PostsRoutingModule, CommonModule, CoreModule, SharedModule],
  providers: [PostsService],
  exports: [PostsComponent, CardComponent, DetailsComponent, ListComponent]
})

export class PostsModule {

}

