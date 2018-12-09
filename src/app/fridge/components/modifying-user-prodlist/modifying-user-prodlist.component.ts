import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/model/product';
import {ProductService} from '../../../core/service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modifying-user-prodlist',
  templateUrl: './modifying-user-prodlist.component.html',
  styleUrls: ['./modifying-user-prodlist.component.scss']
})
export class ModifyingUserProdlistComponent implements OnInit {

  public productList: Array<Product>;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(productList => {
      this.productList = productList;
    });
  }

  public saveNewProdList() {
    this.productService.changeProdList();
    this.router.navigate(['fridge']);
  }

}
