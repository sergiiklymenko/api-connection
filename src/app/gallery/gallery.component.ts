import {Component, OnInit} from "@angular/core";
import {BroadcasterService} from "../__core/broadcaster/broadcaster.service";

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html'
})

export class GalleryComponent implements OnInit {

  constructor(private broadcasterService: BroadcasterService) {
  }


  ngOnInit() {
    this.broadcasterService.emit('title', 'This is Gallery');
  }
}
