import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, public loginService: LoginService, private usersServices: UsersService) { }

  public onLoginPage() {
    this.router.navigate(['login']);
  }

  public onHomePage() {
    this.router.navigate(['']);
  }

  public logout() {
    this.router.navigate(['']);
    this.loginService.logoutUser();
  }


}
