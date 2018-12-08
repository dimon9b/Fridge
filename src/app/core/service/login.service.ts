import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  public loginUser(id) {
    localStorage.setItem('userId', id);
  }

  public logoutUser() {
    localStorage.removeItem('userId');
  }

  public isLoggedInUser(): boolean {
    const userId = localStorage.getItem('userId');
    return !isNullOrUndefined(userId);
  }

  public getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }


}
