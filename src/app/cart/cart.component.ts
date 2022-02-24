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
  size = 0;
  subscription: Subscription = new Subscription();
  static resetCart = 'clearCart';


  constructor(private broadcaster: BroadcasterService,
              private itemService: ItemService) {

  }

  ngOnInit() {
    this.updateItemsInCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateItemsInCart() {
    this.subscription.add(this.broadcaster.on(ProductsComponent.updateCart).subscribe((status: boolean) => {
      !status ? this.size++ : this.size--;
      this.itemService.setData(this.size);
      console.log('Items in the cart', this.size);
    }));
  }

  clearCart() {
    this.itemService.removeData();
    this.size = 0;
    this.broadcaster.emit(CartComponent.resetCart);
  }

}
