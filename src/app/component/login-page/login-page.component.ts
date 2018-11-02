import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public msgs: Message[] = [];

  public valueName: string;
  public valuePass: string;
  public usersData: Array<string> = [];

  public successPrimeNg() {
    this.msgs.push({severity: 'success', summary: 'Item saved', detail: 'It univer demonstration'});
  }

  constructor(private router: Router) { }

  public onNavigate() {
    this.router.navigate(['forgot']);
  }

  public saveAccount() {
    if (this.valueName && this.valuePass) {
      console.log(this.valueName);
      console.log(this.valuePass);
      this.successPrimeNg();
    } else {
      this.msgs.push({severity: 'error', summary: 'Item not saved', detail: 'Something is not filled'});
    }
  }

}
