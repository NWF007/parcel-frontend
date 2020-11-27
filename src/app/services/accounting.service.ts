import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounting } from '../models/accounting.model';

@Injectable({
  providedIn: 'root'
})
//I WOULD JUST LIKE TO SAY YOU CAN DO IT!!!!
//STAY STRONG, MOTIVATED AND POSITIVE!!!!!
//NO NEED TO STRESS SO MUCH <3
//DO NOT BE AFRAID TO ASK FOR HELP
//YOU ONLY NEED 7% TO GET 50%

export class AccountingService {
  private baseURL: string = 'http://localhost:8888/accounting';
  private id: string;
  //feedback: any = {};

  constructor(private http: HttpClient) { }

  //CREATE
  createNewAccounting(accounting: Accounting) : Observable <Accounting> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Accounting>(this.baseURL + '/create', accounting, {headers});
  }

  //READ
  searchFor(id: string) : Observable <Accounting> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Accounting>(this.baseURL + '/find/' + id, {headers});
  }

  //UPDATE
  updateAccounting(updateAcc: Accounting): Observable<Accounting>{
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Accounting>(this.baseURL + '/update', updateAcc, {headers});
  }

  //DELETE
  deleteAccounting(id: string) : Observable<any>{
    let username='admin';
    let password='admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    //return this.http.delete<Accounting>(this.baseURL + '/delete/' + id, {headers});
    if (confirm ('Are you sure you want to delete this?')) {
      return this.http.delete(this.baseURL + '/delete/' + id, {headers});
      //this.feedback = {type: 'success', message: 'Delete was successful!'};
    }
    //return this.http.delete<String>(this.baseURL + '/delete/' + id, {headers});
    //return this.http.delete(this.baseURL + '/delete/' + id);
  }

  //GET ALL
  getAll() : Observable <Accounting[]> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Accounting[]>(this.baseURL + '/all',
    {headers}
    );
  }

  //BUSINESS RULE
  showProfits() : Observable <Accounting[]> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Accounting[]>(this.baseURL + '/profits', {headers});
  }

  saveId(id: string){
    this.id = id;
  }

  getStatementId(): string {
    return this.id;
  }

  //getDonations()
  //getInventory()
}
