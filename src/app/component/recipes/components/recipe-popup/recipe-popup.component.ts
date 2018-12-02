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

  public recipe: Recipe = new Recipe('','','','','',0);

  constructor(private emitterService: EmitterService) { }

  ngOnInit() {
    this.emitterService.getRecipeEmitter().subscribe(recipe => {
      console.log('<<< ', recipe);
      this.recipe = recipe;
    });
  }

}
