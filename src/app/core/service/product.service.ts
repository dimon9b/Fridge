import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginService} from './login.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product> = [];

  constructor(private userService: UsersService,
              private loginService: LoginService,
              private http: HttpClient) {
  }

  public getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('http://localhost:3000/products');
  }

  public getProductList(): Observable<Product[]> {
    if (this.productList.length === 0) {
      const userId = this.loginService.getUserId();
      return this.userService.getUserById(userId).pipe(map(user => {
        this.productList = user.productList;
        return this.productList;
      }));
    }
    return of(this.productList);
  }

  public addProduct(product: Product) {
    const existedProductIndex = this.productList.findIndex(p => p.productItem.id === product.productItem.id);
    if (existedProductIndex < 0) {
      this.productList.push(product);
    } else {
      this.productList[existedProductIndex].amount += product.amount;
    }

    this.updateUserProdList();
  }

  public changeProdList() {
    this.productList = this.productList.filter(product => product.amount > 0);
    this.updateUserProdList();
  }

  public updateUserProdList() {
    const userId = this.loginService.getUserId();
    this.userService.getUserById(userId).subscribe(user => {
      user.productList = this.productList;
      this.userService.updateUser(user).subscribe();
    });
  }

  public clearProductList() {
    this.productList = [];
  }
}
