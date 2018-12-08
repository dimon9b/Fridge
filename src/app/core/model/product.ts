export class Product {
  public productItem: ProductItem;
  public amount: number;

  constructor(productItem: ProductItem, amount: number) {
    this.productItem = productItem;
    this.amount = amount;
  }
}
