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

  createJob() {} //C

  findJobById() {} //R

  updateJob() {} //U

  deleteJob(id: string) {
    let username='admin';
    let password ='admin';

    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});

    return this.http.delete(this.baseURL + '/delete/' + id, {headers});
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseURL + '/all');
  }
}
