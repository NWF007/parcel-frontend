import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee;
  id: string;

  _employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  //first need to get the specific employee and by using the getId() method from employee service
  getEmployee() {
    this.id = this.employeeService.getId();
    this.employeeService.findEmployeeById(this.id).subscribe(emp => {
      this.employee = emp;
      console.log(this.employee);
      console.log(this.id);
    });
  }

  update(){
    this.employeeService.updateEmployee(this.employee).subscribe(emp => {
      console.log(emp);
      this.employee = emp;
    }, err => {
      console.log(err);
    });
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){
    this.router.navigate(['/employees']);
  }
}
