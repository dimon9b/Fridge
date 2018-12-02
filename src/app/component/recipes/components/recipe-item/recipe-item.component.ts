import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../../../model/product";
import {RecipesService} from "../../../../service/recipes.service";
import {Recipe} from "../../../../model/recipe";
import {EmitterService} from "../../../../service/emitter.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  public productList: Array<Product>;

  @Input()
  public recipe: Recipe;

  @Output()
  public passDataToPopup = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipesService,
              private emitterService: EmitterService) { }

  ngOnInit() {
    this.productList = this.recipe.productList;
  }

  public showFullInfo() {
    this.emitterService.getRecipeEmitter().emit(this.recipe);
  }

}
