import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productName: string;
  public productAmount: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  public addProduct() {
    this.productService.addProduct(new Product(this.productName, this.productAmount));
    this.productName = '';
    this.productAmount = null;
  }
}
