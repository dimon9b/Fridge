import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../core/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  public product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
