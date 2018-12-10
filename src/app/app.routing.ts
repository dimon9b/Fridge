import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './core/components/home-page/home-page.component';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'fridge', loadChildren: 'app/fridge/fridge.module#FridgeModule', canActivate: [AuthGuard]},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule', canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

