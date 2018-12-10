import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesRoutingModule} from "./recipes.routing";
import {AddRecipeComponent} from "./components/add-recipe/add-recipe.component";
import {RecipeItemComponent} from "./components/recipe-item/recipe-item.component";
import {RecipePopupComponent} from "./components/recipe-popup/recipe-popup.component";
import {RecipesComponent} from "./recipes.component";
import {RecipesListComponent} from "./components/recipes-list/recipes-list.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    AddRecipeComponent,
    RecipeItemComponent,
    RecipePopupComponent,
    RecipesComponent,
    RecipesListComponent
  ]
})
export class RecipesModule { }
