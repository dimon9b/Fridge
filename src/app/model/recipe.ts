import {Product} from "./product";

export class Recipe {
  public id: number;
  public name: string;
  public type: 'Soup'|'Salad'|'Dessert'|'Other';
  public description: string;
  public image: string;
  public productList: Product[];

  // constructor(name: string, image: string, description: string, productName: Product['name'], productAmount: Product['amount']) {
  //   this.name = name;
  //   this.image = image;
  //   this.listOfProd = [productName, productAmount];
  //   this.description = description;
  // }

  constructor ( name: string, image: string, description: string, productName: Product['name'], productAmount: Product['amount']) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.productList = [{'name': productName, 'amount': productAmount}];
  }
}
