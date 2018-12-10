import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {NgModule} from "@angular/core";

const RECIPES_ROUTES: Routes = [
  {
    path: '', component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(RECIPES_ROUTES)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
