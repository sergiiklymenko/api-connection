import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductsInterface} from "../products/products.interface";
import {ProductsComponent} from "../products/products.component";
import {Subscription} from "rxjs";
import {BroadcasterService} from "../__core/broadcaster/broadcaster.service";
import {ItemService} from "../__core/itemService/item.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit, OnDestroy {
  size: any;
  subscription: Subscription = new Subscription();


  constructor(private broadcaster: BroadcasterService,
              private itemService: ItemService) {

  }

  ngOnInit() {
    this.decreaseItemsInCart();
    this.increaseItemsInCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increaseItemsInCart() {
    this.subscription.add(this.broadcaster.on(ProductsComponent.increaseKey).subscribe(() => {
      this.size++;
      this.itemService.setData(this.size);
      console.log('Items in the cart', this.size);
    }));
  }

  decreaseItemsInCart() {
    this.subscription.add(this.broadcaster.on(ProductsComponent.decreaseKey).subscribe(() => {
      this.size--;
      this.itemService.setData(this.size);
      console.log('Items in the cart', this.size);
    }))
  }

  deleteFromCart() {
    this.itemService.removeData();
    this.size = undefined;
  }

}
