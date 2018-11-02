import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  public onRegistrationPage() {
    this.router.navigate(['registration']);
  }

  public onLoginPage() {
    this.router.navigate(['login']);
  }

  public onHomePage() {
    this.router.navigate(['']);
  }

}
