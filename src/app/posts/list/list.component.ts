import {Component, OnInit} from "@angular/core";
import {ApiResult, CardInterface} from "../card/card.interface";
import {PostsService} from "../posts.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
  cards: CardInterface[] | undefined | any;
  newInventory: any;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe((obj: ApiResult) => {
      this.cards = obj.data;
    })
  }

  // outputPosts(userService: any) {
  //   console.log('Output', userService);
  // }

  receiveStatusList(newStatusList: string) {
    // this.newInventory = newStatusList;
    console.log('new Status in the list component '+ newStatusList)
  }


}
