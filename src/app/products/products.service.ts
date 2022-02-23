import {Injectable} from "@angular/core";
import {ProductsInterface} from "./products.interface";
import {Observable} from "rxjs";

@Injectable()

export class ProductsService {
  productsArr: ProductsInterface[] = [
    {
      id: '0001',
      date: '01.27.2021',
      title: 'Cap',
      description: 'This cap is light and protects from the sun'
    },
    {
      id: '0002',
      date: '03.15.2021',
      title: 'T-shirt',
      description: 'White casual T-shirt has classy look'
    },
    {
      id: '0003',
      date: '05.11.2021',
      title: 'Jacket',
      description: 'Brown jacket with fur layer is warm and light'
    },
  ];

  constructor() {
    this.setProducts();
  }

  setProducts(): Observable<ProductsInterface[]> {
    return new Observable(subscriber => {
      subscriber.next(this.productsArr);
      subscriber.complete();
    });
  }
}

