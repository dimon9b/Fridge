import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UsersService} from '../../service/users.service';
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
    this.router.navigate(['login']);
  }

  public onRegistrationPage() {
    this.router.navigate(['registration']);
  }

  public onHomePage() {
    this.router.navigate(['']);
  }

  public logout() {
    this.router.navigate(['']);
    this.productService.clearProductList();
    this.loginService.logoutUser();
  }
  getUserIdStatus() {
    console.log(this.loginService.getUserId());
  }
}
