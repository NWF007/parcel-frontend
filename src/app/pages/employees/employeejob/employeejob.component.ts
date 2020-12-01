import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeejob } from 'src/app/models/employeejob.model';
import { Job } from 'src/app/models/job.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeejobService } from 'src/app/services/employeejob.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-employeejob',
  templateUrl: './employeejob.component.html',
  styleUrls: ['./employeejob.component.css']
})
export class EmployeejobComponent implements OnInit {

  id = "";
  jobId = "";
  newJobTitle;

  submitted = false;
  jobs: Array<Job> = [];
  empJobsList: Array<Employeejob> = [];

  constructor(private router: Router, private jobService: JobService, private employeeService: EmployeeService, private employeeJobService: EmployeejobService) { }

  ngOnInit(): void {
    this.getJobs();
    this.getEmployeeId();
  }

  onSubmit(f: NgForm){
    const { jobTitle } = f.form.value;
    this.newJobTitle = jobTitle;
    this.jobId  = this.findJobId(this.newJobTitle);

    this.submitted = true;
    this.update();
  }

  cancel(){
    this.router.navigate(['/employees']);
  }

  getJobs(){
    this.jobService.getAllJobs().subscribe(job => {
      this.jobs = job;
    });
  }

  update(){
    let emp = new Employeejob();
    Object.assign(emp, {
      "employeeNumber": this.id,"jobNumber": this.jobId
    });

    this.employeeJobService.getAllEmployeeJobs().subscribe(empJobs => {
      this.empJobsList = empJobs;
    });
    console.log(this.empJobsList);

    this.employeeJobService.createEmployeeJob(emp).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.newJobTitle);

    this.router.navigate(['/employees']);
  }

  getEmployeeId() {
    this.id = this.employeeService.getId();
    console.log(this.id);
    return this.id;
  }

  findJobId(jobTitle: string){
    let jobId = this.jobs.find(job => job.jobTitle === jobTitle);

    console.log(jobId.jobNumber);
    return jobId.jobNumber;

  }

}
