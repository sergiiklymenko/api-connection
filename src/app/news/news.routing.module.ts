import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NewsComponent} from "./news.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'news', component: NewsComponent}
  ])]
})

export class NewsRoutingModule {

}
