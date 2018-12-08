import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/service/product.service';
import {Product} from '../../../core/model/product';
import { CompleterService, CompleterData } from 'ng2-completer';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productName: string;
  public productAmount: number;
  public dataService: CompleterData;
  public productItems: ProductItem[];

  constructor(private productService: ProductService,
    private completerService: CompleterService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productItems = products;
      this.dataService = this.completerService.local(this.productItems , 'name', 'name');
    });
  }

  public addProduct() {
    const foundProductItem = this.productItems.find(productIem => productIem.name === this.productName);
    if (!isNullOrUndefined(foundProductItem) && !isNullOrUndefined(this.productAmount)) {
      this.productService.addProduct(new Product(foundProductItem, this.productAmount));
      this.productName = '';
      this.productAmount = null;
    }
  }
}
