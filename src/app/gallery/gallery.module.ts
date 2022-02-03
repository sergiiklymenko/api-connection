import {NgModule} from "@angular/core";
import {GalleryComponent} from "./gallery.component";
import {GalleryRoutingModule} from "./gallery.routing.module";

@NgModule({
  declarations: [GalleryComponent],
  imports: [GalleryRoutingModule],
  exports: [GalleryComponent]
})

export class GalleryModule {

}
