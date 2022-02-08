import {Component, Input} from "@angular/core";
import {NewsInterface} from "../news.interface";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})

export class TopicComponent {
  @Input() topicList: NewsInterface | undefined | any;
  @Input() indexNews = 0;
}

