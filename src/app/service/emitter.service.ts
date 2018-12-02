import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  private recipeToPopupEmitter: EventEmitter<Recipe> = new EventEmitter();

  public getRecipeEmitter(): EventEmitter<Recipe> {
    return this.recipeToPopupEmitter;
  }
}

