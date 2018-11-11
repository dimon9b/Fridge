import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private usersServices: UsersService) {
  }

  public loginUser(id) {
    localStorage.setItem('isUserLogin', 'true');
    localStorage.setItem('userId', id);
  }

  public logoutUser() {
    localStorage.setItem('isUserLogin', 'false');
    localStorage.setItem('userId', '');
  }

  public getUserLoginStatus(): boolean {
    return localStorage.getItem('isUserLogin') === 'true';
  }

  public getUserIdStatus() {
    return localStorage.getItem('userId');
  }
}
