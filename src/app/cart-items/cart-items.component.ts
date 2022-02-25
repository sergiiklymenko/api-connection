import {Component, OnInit} from "@angular/core";
import {StorageService} from "../__core/storage/storage.service";
import {ProductCardComponent} from "../products/product-card/product-card.component";

@Component({
  selector: 'app-item-cart',
  templateUrl: './cart-items.component.html'
})

export class CartItemsComponent implements OnInit {
  cartItems: any;

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    this.cartItems = this.storage.getData(ProductCardComponent.cartCount) || [];
  }
}
