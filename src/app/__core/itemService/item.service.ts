import {Injectable} from "@angular/core";
import {StorageService} from "../storage/storage.service";

@Injectable()

export class ItemService {
  readonly itemCountKey = 'itemCount';
  items = [];

  constructor(private storage: StorageService) {
    this.items = this.storage.getData(this.itemCountKey) || this.items;
  }


  getData(): any {
    return this.items;
  }

  setData(itemsCart: any) {
    this.storage.setData(this.itemCountKey, itemsCart);
    this.items = itemsCart;
  }

  removeData() {
    this.storage.getData(this.itemCountKey);
  }

}
