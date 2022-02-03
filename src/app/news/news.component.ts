import {Component, OnInit} from "@angular/core";
import {NewsService} from "./news.service";
import {ApiData, NewsInterface} from "./news.interface";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  news: NewsInterface[] | undefined;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe( (obj: ApiData) => {
      console.log(obj.articles)
      this.news = obj.articles;
    })
  }
}
