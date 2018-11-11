import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private usersServices: UsersService) {
  }

  public loginUser(email) {
    localStorage.setItem('isUserLogin', 'true');
    localStorage.setItem('userMail', email);
  }

  public logoutUser() {
    localStorage.setItem('isUserLogin', 'false');
    localStorage.setItem('userMail', '');
  }

  public getUserLoginStatus(): boolean {
    return localStorage.getItem('isUserLogin') === 'true';
  }

  public getUserMailStatus() {
    return localStorage.getItem('userMail');
  }
}
