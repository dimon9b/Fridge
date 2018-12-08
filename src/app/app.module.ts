import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import { MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import { AppRoutingModule} from './app.routing';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './component/registration-and-login/components/registration-form/registration-form.component';
import { ForgotComponent } from './component/registration-and-login/components/forgot/forgot.component';
import { HomePageComponent } from './component/share/components/home-page/home-page.component';
import { LoginPageComponent } from './component/registration-and-login/components/login-page/login-page.component';
import { HeaderComponent } from './component/share/components/header/header.component';
import { FooterComponent } from './component/share/components/footer/footer.component';
import { FridgeComponent } from './component/fridge/fridge.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { AddProductComponent } from './component/fridge/components/add-product/add-product.component';
import { RecipesListComponent } from './component/recipes/components/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './component/recipes/components/add-recipe/add-recipe.component';
import { ProductListComponent } from './component/fridge/components/product-list/product-list.component';
import { ProductItemComponent } from './component/fridge/components/product-item/product-item.component';
import { RecipeItemComponent } from './component/recipes/components/recipe-item/recipe-item.component';
import { RecipePopupComponent } from './component/recipes/components/recipe-popup/recipe-popup.component';

import { UsersService } from './service/users.service';

import { Ng2CompleterModule } from 'ng2-completer';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ForgotComponent,
    HomePageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    FridgeComponent,
    RecipesComponent,
    AddProductComponent,
    RecipesListComponent,
    AddRecipeComponent,
    ProductListComponent,
    ProductItemComponent,
    RecipeItemComponent,
    RecipePopupComponent
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
    HttpClientModule,
    Ng2CompleterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
