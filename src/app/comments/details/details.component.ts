import {Component, OnInit} from "@angular/core";
import {ApiData, CommentsInterface} from "../comments.interface";
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {
  id = ''
  data: CommentsInterface | undefined;

  constructor(private route: ActivatedRoute,
              private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.findCorrectComment();
    })
  }

  findCorrectComment() {
    this.commentsService.getComments().subscribe( (obj: ApiData) => {
      console.log('correct comment', obj.data)
      obj.data.forEach( (data: CommentsInterface) => {
        if (''+this.id === ''+data.id) {
          this.data = data;
        }
      })
    })
  }
}
