import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../../../service/recipes.service";
import { Recipe } from "../../../../model/recipe";
import {ProductService} from "../../../../service/product.service";
import {LoginService} from "../../../../service/login.service";
import {Product} from "../../../../model/product";
import {User} from "../../../../model/user";
import {UsersService} from "../../../../service/users.service";


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
    this.recipesService.getRecipes().subscribe(recipesList => {

      recipesList.forEach((value, index) => {
        let prodListOfCurrentRecipe = recipesList[index].productList;
        console.log(prodListOfCurrentRecipe);
        // filterRecipes: this.productList, prodListOfCurrentRecipe;

        this.productList.forEach(item => {
          const productFound = prodListOfCurrentRecipe.find(product => item.name === product.name);
          if (!productFound) {
            console.log('not passed');
            return null;
          } else {
            console.log('passed');
          }
        });
        console.log(recipesList[index].name, recipesList[index].productList);
      });

      this.recipesList = recipesList;
    });
  }

  public uploadUserInfo() {
    this.productService.getProductList().subscribe(productList => {
      this.productList = productList;
    });
  }

}
