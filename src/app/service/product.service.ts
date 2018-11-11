import {Injectable} from '@angular/core';
import {Product} from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product> = [new Product('potato', 5), new Product('cheese', 300)];

  constructor() {
  }

  getProductList(): Array<Product> {
    return this.productList;
  }

  addProduct(product: Product) {
    this.productList.push(product);
  }
}
