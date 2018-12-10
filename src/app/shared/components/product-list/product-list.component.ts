import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/service/product.service';
import { Product } from '../../../core/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.productService.getProductList().subscribe(productList => {
     this.productList = productList;
   });
  }
}
