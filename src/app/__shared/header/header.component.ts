import {Component, OnDestroy, OnInit} from "@angular/core";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";
import {LoginComponent} from "../../login/login.component";
import {Subscription} from "rxjs";
import {UserService} from "../../__core/userService/user.service";
import {ProductsComponent} from "../../products/products.component";
import {ItemService} from "../../__core/itemService/item.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()
  login: string | undefined;


  constructor(private broadcaster: BroadcasterService,
              private user: UserService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.login = this.user.getData();

    this.subscription.add(this.broadcaster.on(LoginComponent.brKEY).subscribe(() => {
      this.login = this.user.getData();
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(event: any) {
    this.user.removeData();
    this.login = undefined;
    // event.preventDefault();
  }

  goToCart() {

  }


}

