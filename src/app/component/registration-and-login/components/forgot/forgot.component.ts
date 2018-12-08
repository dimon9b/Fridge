import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../../../service/users.service';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  public enteredEmail = '';
  public receivedPass = '';

  constructor(private router: Router, private UsersServices: UsersService) { }

  public backToForm() {
    this.router.navigate(['login']);
  }

  public findPassByEmail() {
    this.UsersServices
      .getUserByEmail(this.enteredEmail)
      .subscribe((response: Array<User>) => {
        if (response.length > 0) {
          this.receivedPass = response[0].password;
        } else {
          this.receivedPass = 'There is no such email in our database!';
        }
      });
  }
}
