import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./__core/core.module";
import {PostsModule} from "./posts/posts.module";
import {SharedModule} from "./__shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {UsersModule} from "./users/users.module";
import {CommentsModule} from "./comments/comments.module";
import {GalleryModule} from "./gallery/gallery.module";
import {NewsModule} from "./news/news.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    GalleryModule,
    NewsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
