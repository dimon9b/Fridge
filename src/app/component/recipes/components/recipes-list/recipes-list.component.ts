import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../../service/recipes.service';
import { Recipe } from '../../../../model/recipe';
import { ProductService } from '../../../../service/product.service';
import { Product } from '../../../../model/product';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  public recipesList: Recipe[];
  public productList: Array<Product>;
  public recipeProductList: Array<Product>;

  constructor(private recipesService: RecipesService,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(productList => {
      this.productList = productList;
    });
  }

  public showRecipes() {
    this.recipesService.getRecipes().subscribe(recipesList => {
      this.recipesList = recipesList.filter(receipt => {
        const receiptProductList = receipt.productList;
        const foundedProducts = receiptProductList.filter(productInReceipt => {
          return this.productList.find(productInFridge => productInFridge.name === productInReceipt.name);
        });
        return foundedProducts.length === receiptProductList.length;
      });
    });
  }
}
