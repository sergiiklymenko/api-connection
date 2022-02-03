import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {GalleryComponent} from "./gallery.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'photo-gallery', component: GalleryComponent}
    ])
  ],
  exports: [RouterModule]
})

export class GalleryRoutingModule {

}
