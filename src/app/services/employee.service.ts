import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL: string = 'http://localhost:8888/employee';
  private id: string;

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee) : Observable<Employee>{
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Employee>(this.baseURL + '/create', employee,
    {headers}
    );
  }

  findEmployeeById(id: string) : Observable<Employee> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Employee>(this.baseURL + '/find/' + id,
    {headers}
    );
  }

  updateEmployee(updateEmployee: Employee): Observable<Employee>{
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Employee>(this.baseURL + '/update', updateEmployee,
    {headers}
    );
  }

  deleteEmployee(id: string) : Observable<any>{
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    if (confirm ('Are you sure you want to delete this?')) {
    return this.http.delete(this.baseURL + '/delete/' + id,
    {headers}
    );
    }
  }

  getAll() : Observable<Employee[]> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Employee[]>(this.baseURL + '/all',
    {headers}
    );
  }

  saveId(id: string){
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}
