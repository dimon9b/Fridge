import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ],
  declarations: [
    ProductItemComponent,
    ProductListComponent
  ]
})
export class SharedModule { }
