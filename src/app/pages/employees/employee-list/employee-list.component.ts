import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[]; //normal array for table

  displayedColumns = ["ID", "Name", "Surname", "Employment Date", "Action"];
  dataSource = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getAll().subscribe(emp => {
      this.dataSource.data = emp;
      console.log(emp);
    });
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id).subscribe(emp => {
      console.log(emp);
      this.getEmployees();
    });
  }

  editEmployee(id: string){
    this.employeeService.saveId(id);
    this.router.navigate(['/employees/update']);
  }

}
