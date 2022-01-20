import {Component, OnInit} from "@angular/core";
import {ApiResult, CardInterface} from "../card/card.interface";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
  cards: CardInterface[] | undefined | any;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe((obj: ApiResult) => {
      this.cards = obj.data;
    })
  }

}
