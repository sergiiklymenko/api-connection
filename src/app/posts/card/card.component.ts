import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from "@angular/core";
import {CardInterface} from "./card.interface";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent implements OnInit, OnChanges {
  @Input() data: CardInterface | undefined | any;
  @Output() status = new EventEmitter<string>();

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    // this.getStatus('working');
    // console.log('this is OnInit userService ', this.userService)
  }

  ngOnChanges() {
    // console.log('this is OnChanges userService ', this.userService)
  }

  getStatus(value: string) {
    this.status.emit(value);
  }

  setServiceMessage() {
    this.postsService.emitValue( 'Simple message');
  }
}
