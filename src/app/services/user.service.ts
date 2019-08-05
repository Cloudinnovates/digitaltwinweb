import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<User>(`${environment.serviceURL}/api/users/authenticate`, { username, password })
        .pipe(map(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
