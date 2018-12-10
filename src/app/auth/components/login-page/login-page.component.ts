import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Router} from '@angular/router';
import { UsersService } from '../../../core/service/users.service';
import { User } from '../../../core/model/user';
import {LoginService} from '../../../core/service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public msgs: Message[] = [];

  public valuePass: string;
  public valueEmail: string;
  public login_error = '';


  constructor(private router: Router, private usersServices: UsersService, private loginService: LoginService) { }

  public checkUser() {
    this.usersServices
      .getUserByEmail(this.valueEmail)
      .subscribe((response: Array<User>) => {
        if (response.length > 0 && response[0].password === this.valuePass) {
          this.loginService.loginUser(response[0].id);
          this.router.navigate(['fridge']);
        } else {
          this.login_error = 'Invalid email or password!';
        }
      });
  }

  public onForgot() {
    this.router.navigate(['auth/forgot']);
  }

  public onRegistrationPage() {
    this.router.navigate(['auth/registration']);
  }

}
