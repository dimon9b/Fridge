import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, public loginService: LoginService,
              private productService: ProductService) { }

  public onLoginPage() {
    this.router.navigate(['auth/login']);
  }

  public onRegistrationPage() {
    this.router.navigate(['auth/registration']);
  }

  public onHomePage() {
    this.router.navigate(['']);
  }

  public navigateToFridge() {
    this.router.navigate(['fridge']);
  }

  public navigateToRecipes() {
    this.router.navigate(['recipes']);
  }

  public logout() {
    this.router.navigate(['']);
    this.productService.clearProductList();
    this.loginService.logoutUser();
  }
}
