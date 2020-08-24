
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(uname: string, password: string) {

    let authToken = this.createBasicAuthHederValue(uname, password);

    let authHeader = new HttpHeaders({
      Authorization: authToken
    })

    return this.http.get(`http://localhost:8080/todo-api/authenticate`, { headers: authHeader })
      .pipe(
        map(
          data => {
            console.log('setting in session')
            sessionStorage.setItem('authenticateduser', uname);
            sessionStorage.setItem('token', authToken);
            return data
          }
        )
      );

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateduser')
  }

  gteAuthenticatedToken() {
    return sessionStorage.getItem('token')
  }
  logout() {
    sessionStorage.removeItem('authenticateduser');
    sessionStorage.removeItem('token');
  }

  createBasicAuthHederValue(uname: string, password: string) {

    let autheHeaderValue = 'Basic ' + window.btoa(uname + ':' + password);
    return autheHeaderValue;
  }

  isUserLoggedIn(){
    return this.getAuthenticatedUser() !== null;
  }
}
