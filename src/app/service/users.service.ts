import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {  }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUserByEmail(email) {
    const httpParams = new HttpParams().append('email', email);
    console.log(httpParams);
    return this.http.get('http://localhost:3000/users', { params: httpParams });
  }

  addUser(userInfo: User) {
    return this.http.post('http://localhost:3000/users', userInfo);
  }
}
