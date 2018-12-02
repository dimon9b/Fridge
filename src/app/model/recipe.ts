import {Product} from "./product";

export class Recipe {
  public id: number;
  public name: string;
  public type: 'Soup'|'Salad'|'Dessert'|'Other';
  public shortDescription: string;
  public longDescription: string;
  public image: string;
  public productList: Product[];

  constructor ( name: string, image: string, shortDescription: string, longDescription: string, productName: Product['name'], productAmount: Product['amount']) {
    this.name = name;
    this.image = image;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.productList = [{'name': productName, 'amount': productAmount}];
  }
}
