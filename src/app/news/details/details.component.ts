import {Component, OnInit} from "@angular/core";
import {ApiDataInterface, NewsInterface} from "../news.interface";
import {ApiResult, CardInterface} from "../../posts/card/card.interface";
import {NewsService} from "../news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html'
  }
)

export class DetailsComponent implements OnInit {
  id = ''
  data: NewsInterface | undefined;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService) {
  }

  ngOnInit() {
    console.log(window.location.pathname);
    this.route.params
      .subscribe(params => {
        this.id = params['id']
        this.findCorrectPost();
      });
  }

  findCorrectPost() {
    this.newsService.getNews().subscribe((obj: ApiDataInterface) => {
      console.log(obj.articles);
      obj.articles.forEach((data: NewsInterface, index: number) => {
        if (''+index === ''+this.id) {
          console.log(data.source.id )
          this.data = data;
        }
      })
    });
  }
}
