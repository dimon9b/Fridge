import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForgotComponent} from './auth/components/forgot/forgot.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';
import {HomePageComponent} from './core/components/home-page/home-page.component';
import {LoginPageComponent} from './auth/components/login-page/login-page.component';
import {FridgeComponent} from './fridge/fridge.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ModifyingUserProdlistComponent} from './fridge/components/modifying-user-prodlist/modifying-user-prodlist.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'fridge', component: FridgeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'fridge/modify', component: ModifyingUserProdlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

