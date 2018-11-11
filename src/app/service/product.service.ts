import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {resolve} from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product>;

  constructor(private userService: UsersService) {
  }

  getProductList(): Observable<Product[]> {
    if (!this.productList) {
      return this.userService.getUserById(1).pipe(map(user => {
        this.productList = user.productList;
        return this.productList;
      }));
    }
    return Observable.create(this.productList);
  }

  addProduct(product: Product) {
    this.productList.push(product);

    this.userService.getUserById(1).subscribe(user => {
      user.productList = this.productList;
      console.log(user);
      this.userService.updateUser(user).subscribe();
    });
  }
}
