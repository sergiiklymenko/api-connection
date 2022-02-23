import {Component, OnInit} from "@angular/core";
import {ProductsInterface} from "./products.interface";
import {ProductsService} from "./products.service";
import {ItemService} from "../__core/itemService/item.service";
import {BroadcasterService} from "../__core/broadcaster/broadcaster.service";
import {StorageService} from "../__core/storage/storage.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  itemCount = 0;
  itemsInTheCart: number | undefined;
  products: ProductsInterface[] = [];
  status = true;
  static increaseKey = 'increaseKey';
  static decreaseKey = 'decreaseKey';

  constructor(private productsService: ProductsService,
              private itemService: ItemService,
              private storage: StorageService,
              private broadcaster: BroadcasterService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.setProducts().subscribe((items: ProductsInterface[]) => {
      console.log('Product Items ', items)
      this.products = items;
    })
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
