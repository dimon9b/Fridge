import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { User } from '../../model/user';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})


export class RegistrationFormComponent {

  public msgs: Message[] = [];
  public valueName: string;
  public valueEmail: string;
  public valuePass: string;
  public userInfo: User;


  public successPrimeNg() {
    this.msgs.push({severity: 'success', summary: 'Item saved', detail: 'It univer demonstration'});
  }

  constructor(private router: Router, private UsersServices: UsersService) { }

  public onNavigate() {
    this.router.navigate(['']);
  }

  public addUser() {
    this.UsersServices
      .addUser(this.userInfo)
      .subscribe((json) => {
        console.log(json);
      });
  }

  public saveAccount() {
    if (this.valueName && this.valuePass && this.valueEmail) {
      this.userInfo = new User(this.valueName, this.valueEmail, this.valuePass);
      this.successPrimeNg();
      this.addUser();
    } else {
      this.msgs.push({severity: 'error', summary: 'Item not saved', detail: 'Something is not filled'});
    }
  }


}
