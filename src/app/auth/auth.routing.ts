import {LoginPageComponent} from "./components/login-page/login-page.component";
import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {ForgotComponent} from "./components/forgot/forgot.component";
import {RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import {NgModule} from "@angular/core";

const AUTH_ROUTES: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: 'login'},
      {path: 'login', component: LoginPageComponent},
      {path: 'forgot', component: ForgotComponent},
      {path: 'registration', component: RegistrationFormComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRouting {
}
