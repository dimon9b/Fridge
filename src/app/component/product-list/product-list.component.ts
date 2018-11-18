import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';

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
