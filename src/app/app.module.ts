import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import { MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import { AppRoutingModule} from './app.routing';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './auth/components/registration-form/registration-form.component';
import { ForgotComponent } from './auth/components/forgot/forgot.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FridgeComponent } from './fridge/components/fridge/fridge.component';
import { RecipesComponent } from './recipes/components/recipes/recipes.component';
import { AddProductComponent } from './fridge/components/add-product/add-product.component';
import { RecipesListComponent } from './recipes/components/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './recipes/components/add-recipe/add-recipe.component';
import { ProductListComponent } from './fridge/components/product-list/product-list.component';
import { ProductItemComponent } from './fridge/components/product-item/product-item.component';
import { RecipeItemComponent } from './recipes/components/recipe-item/recipe-item.component';
import { RecipePopupComponent } from './recipes/components/recipe-popup/recipe-popup.component';

import { UsersService } from './core/service/users.service';

import { Ng2CompleterModule } from 'ng2-completer';
import { ModifyingUserProdlistComponent } from './fridge/components/modifying-user-prodlist/modifying-user-prodlist.component';
import { ModifyingUserProdItemComponent } from './fridge/components/modifying-user-prod-item/modifying-user-prod-item.component';


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
    RecipePopupComponent,
    ModifyingUserProdlistComponent,
    ModifyingUserProdItemComponent
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
