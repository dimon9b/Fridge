import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import {MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ForgotComponent,
    HomePageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    GrowlModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
