import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForgotComponent} from './component/forgot/forgot.component';
import {RegistrationFormComponent} from './component/registration-form/registration-form.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {FridgeComponent} from './component/fridge/fridge.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'fridge', component: FridgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

