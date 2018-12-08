import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ProductService } from '../../../core/service/product.service';
import { Product } from '../../../core/model/product';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public dataService: CompleterData;
  public productItems: ProductItem[];

  public choosenProduct: ProductItem;
  public productName: string;
  public productAmount: number;

  constructor(private productService: ProductService,
    private completerService: CompleterService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productItems = products;
      this.dataService = this.completerService.local(this.productItems , 'name', 'name');
    });
  }

  public onSelectedProductName(selectedItem: CompleterItem) {
    this.choosenProduct = selectedItem ? selectedItem.originalObject : null;
  }

  public addProduct() {
    if (!isNullOrUndefined(this.choosenProduct) && !isNullOrUndefined(this.productAmount)) {
      this.productService.addProduct(new Product(this.choosenProduct, this.productAmount));
      this.choosenProduct = null;
      this.productAmount = null;
      this.productName = '';
    }
  }

  public isAddProductBtnDisabled(): boolean {
    return isNullOrUndefined(this.productName)
    || isNullOrUndefined(this.productAmount)
    || this.productAmount === 0;
  }
}
