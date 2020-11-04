import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  job: Job;
  id: string;

  _job: Job = new Job();
  submitted = false;

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.getJob();
  }

  //first need to get the specific employee and by using the getId() method from employee service
    getJob() {
    this.id = this.jobService.getId();
    this.jobService.findJobById(this.id).subscribe(jobs => {
      this.job = jobs;
      console.log(this.job);
      console.log(this.id);
    });
  }

  update(){
    this.jobService.updateJob(this.job).subscribe(jobs => {
      console.log(jobs);
    }
    // , err => {
    //   console.log(err);
    );
    this.router.navigate(['/job']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){
    this.router.navigate(['/job']);
  }
}
