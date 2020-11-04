import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  private jobs: Job[]; //normal array for table

  displayedColumns = ["Job Number", "Job Title", "Action"];
  dataSource = new MatTableDataSource<Job>();

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getAllJobs().subscribe(job => {
      this.dataSource.data = job;
      console.log(job);
    });
  }

  deleteJob(id: string){
    this.jobService.deleteJob(id).subscribe(job => {
      console.log(job);
      this.getJobs();
    });
  }

  editJob(id: string){
    this.jobService.saveId(id);
    this.router.navigate(['/job/update']);
  }
}
