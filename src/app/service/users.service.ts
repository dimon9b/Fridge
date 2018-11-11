import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {  }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/'  + id);
  }

  getUserByEmail(email: string): Observable<User[]>  {
    const httpParams = new HttpParams().append('email', email);
    return this.http.get<User[]>('http://localhost:3000/users', { params: httpParams });
  }

  addUser(userInfo: User) {
    return this.http.post('http://localhost:3000/users', userInfo);
  }

  updateUser(user: User) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }
}
