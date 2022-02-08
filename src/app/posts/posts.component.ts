import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('PostOnInit');
    this.redirect()
    console.log('PostOnInit');
  }

  redirect() {
    if (this.router.url === '/posts') {
      this.router.navigateByUrl('posts/list');
    }
  }

}

