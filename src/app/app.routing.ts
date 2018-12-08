import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForgotComponent} from './component/registration-and-login/components/forgot/forgot.component';
import {RegistrationFormComponent} from './component/registration-and-login/components/registration-form/registration-form.component';
import {HomePageComponent} from './component/share/components/home-page/home-page.component';
import {LoginPageComponent} from './component/registration-and-login/components/login-page/login-page.component';
import {FridgeComponent} from './component/fridge/fridge.component';
import {RecipesComponent} from './component/recipes/recipes.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'fridge', component: FridgeComponent},
  {path: 'recipes', component: RecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

