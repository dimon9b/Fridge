import {Product} from './product';

export class User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public productList: Product[];

  constructor ( name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.productList = [];
  }
}
