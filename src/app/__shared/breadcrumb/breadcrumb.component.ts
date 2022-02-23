import {Component, OnInit} from "@angular/core";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})

export class BreadcrumbComponent implements OnInit{
  pageTitle: any;

  constructor(private broadcasterService: BroadcasterService) {

  }

  ngOnInit() {
    this.broadcasterService.on('title').subscribe((title) => {
      console.log(title);
      this.pageTitle = title;
    })
  }

}

