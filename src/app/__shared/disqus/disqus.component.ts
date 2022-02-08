import {Component} from "@angular/core";

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html'
})

export class DisqusComponent {
  pageId = window.location.pathname

}
