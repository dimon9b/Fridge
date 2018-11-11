import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private usersServices: UsersService) {
  }

  public loginUser(id) {
    localStorage.setItem('userId', id);
  }

  public logoutUser() {
    localStorage.setItem('userId', null);
  }

  public getUserLoginStatus(): boolean {
    return localStorage.getItem('userId') !== null;
  }

  public getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }
}
