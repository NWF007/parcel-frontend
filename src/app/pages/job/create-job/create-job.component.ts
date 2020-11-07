import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  job: Job = new Job();
  submitted = false;

  constructor(private jobService:JobService, private router:Router) { }

  ngOnInit() {
  }

  newJob() : void{
    this.submitted = false;
    this.job = new Job();
  }


  save(){

    this.jobService.createJob(this.job).subscribe(data => console.log(data), error => console.log(error));
    this.job = new Job();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/job']);

  }

  cancel(){
    this.router.navigate(['/job']);
  }

}
