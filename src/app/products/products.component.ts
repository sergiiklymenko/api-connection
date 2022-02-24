import {Component, OnInit} from "@angular/core";
import {ProductsInterface} from "./products.interface";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  productList: ProductsInterface[] = [];
  static updateCart = 'updateCart';
  static decreaseKey = 'decreaseKey';

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.setProducts().subscribe((items: ProductsInterface[]) => {
      console.log('Product Items ', items)
      this.productList = items;
    })
  }



}
