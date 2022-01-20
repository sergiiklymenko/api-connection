import {Component, Input} from "@angular/core";
import {CardInterface} from "./card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  @Input() data: CardInterface | undefined | any;

}
