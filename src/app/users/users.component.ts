import {Component, OnInit} from "@angular/core";
import {UsersService} from "./users.service";
import {from, Observable, switchMap} from "rxjs";
import {NewsService} from "../news/news.service";
import {PostsService} from "../posts/posts.service";
import {CommentsService} from "../comments/comments.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private usersService: UsersService,
              private newsService: NewsService,
              private postsService: PostsService,
              private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((obj: any) => {
      this.users = obj.data;
      // console.table(this.users);
    })
    this.getAllData().subscribe((data: any) => {
      console.log('all userService', data)
    })
  }

  getAllData() {
    let objUser: any;
    let objNews: any;
    let objPosts: any;

    return from(this.usersService.getUsers())
      .pipe(
        switchMap((usersData: any) => {
          objUser = usersData;
          return this.newsService.getNews();
        }),
        switchMap((newsData: any) => {
          objNews = newsData;
          return this.postsService.getPosts();
        }),
        switchMap((postsData: any) => {
          objPosts = postsData;
          return this.commentsService.getComments();
        }),
        switchMap((commentsData: any) => {
          return new Observable(subscriber => {
            subscriber.next({user: objUser, news: objNews, posts: objPosts, comments: commentsData},)
            subscriber.complete();
          });
        })
      )
  }

}
