import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employeejob } from '../models/employeejob.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeejobService {
  private baseURL: string = 'http://localhost:8888/employeejob';
  private id: string;

  constructor(private http: HttpClient) {}

  createEmployeeJob(employeeJob: Employeejob): Observable<Employeejob> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Employeejob>(this.baseURL + '/create', employeeJob, {headers}
    );
  }

  findEmployeeJobById(id: string): Observable<Employeejob> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Employeejob>(this.baseURL + '/read/' + id, {headers}
    );
  }

  updateEmployeeJob(updateEmployeeJob: Employeejob): Observable<Employeejob> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Employeejob>(this.baseURL + '/update', updateEmployeeJob, {headers}
    );
  }

  deleteEmployeeJob(id: string): Observable<any> {
    let username='admin';
    let password ='admin123';

    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});

    return this.http.delete(this.baseURL + '/delete/' + id, {headers});
  }

  getAllEmployeeJobs(): Observable<Employeejob[]> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Employeejob[]>(this.baseURL + '/all',
    {headers}
    );
}
}
