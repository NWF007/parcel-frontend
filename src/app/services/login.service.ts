import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL: string = 'http://localhost:8888/login';

  constructor(private http:HttpClient, private router: Router) { }

  authenticate(username:string, password:string) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Login>(this.baseURL,
      // {headers}
      ).pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  checkIfLoggedIn(){
    let user = sessionStorage.getItem('username')

    if(user != null){
      return true;
    }

    return false;
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.router.navigate['/'];
    // this.hide();

  }
}
