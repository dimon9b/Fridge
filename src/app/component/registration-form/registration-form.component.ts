import {Component} from '@angular/core';
import {Message} from 'primeng/api';
import { Router} from '@angular/router';


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
  public usersData: Object[] = [];


  public successPrimeNg() {
    this.msgs.push({severity: 'success', summary: 'Item saved', detail: 'It univer demonstration'});
  }

  constructor(private router: Router) { }

  public onNavigate() {
    this.router.navigate(['']);
  }

  public saveAccount() {
    if (this.valueName && this.valuePass && this.valueEmail) {

      this.usersData.push({'name': this.valueName, 'pass': this.valuePass, 'email': this.valueEmail})
      console.log(this.usersData);
      this.successPrimeNg();
    } else {
      this.msgs.push({severity: 'error', summary: 'Item not saved', detail: 'Something is not filled'});
    }
  }


}
