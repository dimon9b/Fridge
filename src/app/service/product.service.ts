import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginService} from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product>;

  constructor(private userService: UsersService,
              private loginService: LoginService) {
  }

  getProductList(): Observable<Product[]> {
    const userId = this.loginService.getUserId();
    if (!this.productList) {
      return this.userService.getUserById(userId).pipe(map(user => {
        this.productList = user.productList;
        return this.productList;
      }));
    }
    return Observable.create(this.productList);
  }

  addProduct(product: Product) {
    const userId = this.loginService.getUserId();
    this.productList.push(product);

    this.userService.getUserById(userId).subscribe(user => {
      user.productList = this.productList;
      this.userService.updateUser(user).subscribe();
    });
  }
}
