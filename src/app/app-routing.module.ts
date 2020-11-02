import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './pages/employees/update-employee/update-employee.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:'employees', component: EmployeeListComponent
  },
  {
    path: 'employees/update', component: UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
