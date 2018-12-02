import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../../service/recipes.service';
import { Recipe } from '../../../../model/recipe';
import { ProductService } from '../../../../service/product.service';
import { Product } from '../../../../model/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public userProductList: Product[];
  public allRecipeList: Recipe[];
  public filteredRecipeList: Recipe[];

  public productMatch = 100;
  public sortedRecipeList: RecipeMatchItem[] = [];

  constructor(private recipesService: RecipesService,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(productList => {
      this.userProductList = productList;
    });
    this.recipesService.getRecipes().subscribe(recipes => {
      this.allRecipeList = recipes;
    });
  }

  public showRecipes() {
    this.sortProductList();
    this.filterRecipeListByProductMatch(this.productMatch);
  }

  filterRecipeListByProductMatch(productMatch: number) {
    let lastIndex = this.sortedRecipeList.length;
    if (productMatch > 0) {
      const foundIndex = this.sortedRecipeList.findIndex(p => p.productMatch < productMatch);
      lastIndex = foundIndex > -1 ? foundIndex : lastIndex;
    }
    this.filteredRecipeList = this.sortedRecipeList.slice(0, lastIndex).map(recipeMatch => recipeMatch.recipe);
  }

  private sortProductList() {
    this.allRecipeList.forEach(recipe => {
      const receiptProductList = recipe.productList;
      const foundedProducts = receiptProductList.filter(productInReceipt => {
        return this.userProductList.find(productInFridge => productInFridge.name === productInReceipt.name);
      });
      const productMatch = (foundedProducts.length / recipe.productList.length) * 100;
      this.sortedRecipeList.push(new RecipeMatchItem(recipe, productMatch));
    });
    this.sortedRecipeList = this.sortedRecipeList.sort((r1, r2) => r2.productMatch - r1.productMatch);
  }
}

class RecipeMatchItem {
  recipe: Recipe;
  productMatch: number;

  constructor(recipe: Recipe, productMatch: number) {
    this.recipe = recipe;
    this.productMatch = productMatch;
  }
}
