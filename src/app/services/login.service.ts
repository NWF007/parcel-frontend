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

    return this.http.get<Login>(this.baseURL + '/validateLogin', {headers}
      ).pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        console.log(userData);
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
    this.hide();

  }


  hide(){
    // document.getElementById('employees').classList.add('hidden');
    // document.getElementById('accounting').classList.add('hidden');
    // document.getElementById('apply').classList.add('hidden');
    // document.getElementById('delivery').classList.add('hidden');
    // document.getElementById('volunteer').classList.add('hidden');
    // document.getElementById('donor').classList.add('hidden');
    // document.getElementById('home').classList.add('hidden');
    // document.getElementById('logout').classList.add('hidden');

  }

  unhide(){
    // document.getElementById('employees').classList.remove('hidden');
    // document.getElementById('accounting').classList.remove('hidden');
    // document.getElementById('apply').classList.remove('hidden');
    // document.getElementById('delivery').classList.remove('hidden');
    // document.getElementById('volunteer').classList.remove('hidden');
    // document.getElementById('donor').classList.remove('hidden');
    // document.getElementById('home').classList.remove('hidden');
    // document.getElementById('logout').classList.remove('hidden');
  }
}
1
