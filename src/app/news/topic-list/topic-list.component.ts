import {Component, OnInit} from "@angular/core";
import {ApiDataInterface, NewsInterface} from "../news.interface";
import {NewsService} from "../news.service";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html'
})

export class TopicListComponent implements OnInit {
  news: NewsInterface[] = [];

  constructor(private newsService: NewsService,
              private broadcasterService: BroadcasterService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe((obj: ApiDataInterface) => {
      console.log(obj.articles)
      this.news = obj.articles;
      this.handleId();
      console.log('News', this.news)
    });
    this.broadcasterService.emit('title', 'Here is News');
  }

  handleId() {
    this.news.forEach((topic:NewsInterface) => {
      topic.source.id = this.randomString();
    });
  }

  randomString(length = 5): string {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
