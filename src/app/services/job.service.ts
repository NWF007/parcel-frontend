import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseURL: string = 'http://localhost:8888/job';
  private id: string;

  constructor(private http: HttpClient) {}

  createJob(job: Job): Observable<Job> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Job>(this.baseURL + '/create', job,
    {headers}
    );
  }

  findJobById(id: string): Observable<Job> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Job>(this.baseURL + '/find/' + id,
    {headers}
    );
  }

  updateJob(updateJob: Job): Observable<Job> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Job>(this.baseURL + '/update', updateJob,
    {headers}
    );
  }

  deleteJob(id: string): Observable<any> {
    let username='admin';
    let password ='admin123';

    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});

    return this.http.delete(this.baseURL + '/delete/' + id, {headers});
  }

  getAllJobs(): Observable<Job[]> {
    let username = 'admin';
    let password = 'admin123';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Job[]>(this.baseURL + '/all',
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
