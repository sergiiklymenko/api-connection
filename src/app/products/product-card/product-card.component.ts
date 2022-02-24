import {Component, Input, OnInit} from "@angular/core";
import {ItemService} from "../../__core/itemService/item.service";
import {StorageService} from "../../__core/storage/storage.service";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";
import {ProductsComponent} from "../products.component";
import {CartComponent} from "../../cart/cart.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})

export class ProductCardComponent implements OnInit {
  status = true;
  @Input() item: any;

  constructor(  private itemService: ItemService,
                private storage: StorageService,
                private broadcaster: BroadcasterService) {
  }

  ngOnInit() {
    this.resetButtons();
  }

  onUpdateCart() {
    this.status = !this.status;
    this.broadcaster.emit(ProductsComponent.updateCart, this.status);
  }

  resetButtons() {
    this.broadcaster.on(CartComponent.resetCart).subscribe(()=> {
      this.status = true;
    })
  }

}
