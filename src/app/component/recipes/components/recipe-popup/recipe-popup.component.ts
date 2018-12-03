import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../../model/recipe";
import {EmitterService} from "../../../../service/emitter.service";

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.scss']
})
export class RecipePopupComponent implements OnInit {

  @Input()
  public passDataToParent: EventEmitter<Recipe>;
  public isPopupShown: boolean = false;

  public recipe: Recipe;
  public defaultRecipe: Recipe = new Recipe('', '', '', '');

  constructor(private emitterService: EmitterService) { }

  ngOnInit() {
    this.recipe = this.defaultRecipe;
    this.emitterService.getRecipeEmitter().subscribe(recipe => {
      this.recipe = recipe;
      this.isPopupShown = true;
    });
  }

  public closePopup() {
    this.recipe = this.defaultRecipe;
    this.isPopupShown = false;
  }

}
