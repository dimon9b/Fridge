import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Router} from '@angular/router';
import { UsersService } from '../../service/users.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public msgs: Message[] = [];

  public valuePass: string;
  public valueEmail: string;
  public isUserLogin: boolean;


  constructor(private router: Router, private UsersServices: UsersService) { }

  public checkUser() {
    this.UsersServices
      .getUserByEmail(this.valueEmail)
      .subscribe((response: Array<User>) => {
        if (response.length > 0 && response[0].password === this.valuePass) {
          console.log(response);
          console.log('Hello ' + response[0].name);
          this.isUserLogin = true;
        } else {
          console.log('There is no such email!!!');
        }
      });
  }

  public onNavigate() {
    this.router.navigate(['forgot']);
  }

}
