import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../core/model/product';

@Component({
  selector: 'app-modifying-user-prod-item',
  templateUrl: './modifying-user-prod-item.component.html',
  styleUrls: ['./modifying-user-prod-item.component.scss']
})
export class ModifyingUserProdItemComponent {

  @Input()
  public product: Product;

  constructor() {

  }



}
