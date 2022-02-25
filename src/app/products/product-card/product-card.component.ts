import {Component, Input, OnInit} from "@angular/core";
import {StorageService} from "../../__core/storage/storage.service";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";
import {ProductsComponent} from "../products.component";
import {CartComponent} from "../../__shared/cart/cart.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})

export class ProductCardComponent implements OnInit {
  status = true;
  @Input() index = 0;
  @Input() item: any;
  static cartCount = 'cartCount';

  constructor(private storage: StorageService,
              private broadcaster: BroadcasterService) {
  }

  ngOnInit() {
    this.resetButtons();
  }

  onUpdateCart() {
    this.status = !this.status;
    this.broadcaster.emit(ProductsComponent.updateCart, this.status);
    const itemArr = this.storage.getData(ProductCardComponent.cartCount) || [];
    if (!this.status) {
      itemArr[this.index] = this.item;
    } else {
      delete itemArr[this.index];
    }
    this.storage.setData(ProductCardComponent.cartCount, itemArr);
  }

  resetButtons() {
    this.broadcaster.on(CartComponent.resetCart).subscribe(() => {
      this.status = true;
    })
  }

}
