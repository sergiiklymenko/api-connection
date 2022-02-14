import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {CardInterface} from "./card.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent implements OnInit {
  @Input() data: CardInterface | undefined | any;
  @Output() status = new EventEmitter<string>();

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    setTimeout(() => {
      this.status.emit('Sergey');
    }, 3000)
  }
}
