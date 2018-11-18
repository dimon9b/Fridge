import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {RecipesService} from "../../../../service/recipes.service";
import {Recipe} from "../../../../model/recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  public productList: Array<Product>;

  @Input()
  public recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.productList = this.recipe.productList;
  }

}
