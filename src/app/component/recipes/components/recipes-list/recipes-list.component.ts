import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../../../service/recipes.service";
import { Recipe } from "../../../../model/recipe";
import {ProductService} from "../../../../service/product.service";
import {Product} from "../../../../model/product";

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
  }

  // public showRecipes() {
  //   this.recipesService.getRecipes().subscribe(
  //     recipesList => {
  //       this.recipesList = recipesList;
  //       console.log(this.recipesList);
  //       this.recipesList.forEach((value, index) => {
  //         console.log(recipesList[index].productList);
  //         this.recipeProductList = recipesList[index].productList;
  //       });
  //       this.uploadUserInfo();
  //     }
  //   );
  // }

  public showRecipes() {
    this.uploadUserInfo();
    this.recipesService.getRecipesListByUserList(this.productList).subscribe(recipesList => {
        this.recipesList = recipesList;
      }
    );
  }

  public uploadUserInfo() {
    this.productService.getProductList().subscribe(productList => {
      this.productList = productList;
    });
  }

}
