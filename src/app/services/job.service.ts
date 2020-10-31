import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseURL: string = 'http://localhost:8888/job';

  constructor(private http: HttpClient) {}

  createJob() {} //C

  findJobById() {} //R

  updateJob() {} //U

  deleteJob() {} //D

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseURL + '/all');
  }
}
