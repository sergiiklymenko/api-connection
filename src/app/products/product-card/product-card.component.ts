import {Component, Input, OnInit} from "@angular/core";
import {ItemService} from "../../__core/itemService/item.service";
import {StorageService} from "../../__core/storage/storage.service";
import {BroadcasterService} from "../../__core/broadcaster/broadcaster.service";
import {ProductsComponent} from "../products.component";

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
  }

  onAddToCart() {
    this.broadcaster.emit(ProductsComponent.increaseKey);
    this.status = false;
  }

  removeFromCart() {
    this.broadcaster.emit(ProductsComponent.decreaseKey);
    this.status = true;
  }
}
