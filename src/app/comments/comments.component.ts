import {Component, OnInit} from "@angular/core";
import {CommentsService} from "./comments.service";
import {ApiData, CommentsInterface} from "./comments.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
  comments: CommentsInterface[] | undefined;

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.commentsService.getComments().subscribe( (obj: ApiData) => {
      this.comments = obj.data;
      console.log('comments', this.comments);
      }
    )
  }

}


