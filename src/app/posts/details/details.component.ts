import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../posts.service";
import {ApiResult, CardInterface} from "../card/card.interface";

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit {
  id = '';
  data: CardInterface | undefined;
  newDetailsStatus = '';


  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id']
        this.findCorrectPost();
      });
  }

  findCorrectPost() {
    this.postsService.getPosts().subscribe((obj: ApiResult) => {
      console.log(obj.data);
      obj.data.forEach((data: CardInterface) => {
        if ('' + data.id === '' + this.id) {
          console.log(data.id)
          this.data = data;
        }
      })
    });
  }

  receiveStatus(newStatus: string) {
    this.newDetailsStatus = newStatus;
    console.log('Current status is: ', newStatus)
  }


}
