import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgotComponent} from "./components/forgot/forgot.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import { ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule } from "primeng/primeng";
import {AuthRouting} from "./auth.routing";
import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    GrowlModule,
    AuthRouting,
    FormsModule
  ],
  declarations: [
    ForgotComponent,
    LoginPageComponent,
    RegistrationFormComponent,
    AuthComponent
  ]
})
export class AuthModule { }
