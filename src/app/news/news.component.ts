import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.redirect();
  }

  redirect() {
    if (this.router.url === '/news') {
      this.router.navigateByUrl('news/topic-list');
    }
  }


}
