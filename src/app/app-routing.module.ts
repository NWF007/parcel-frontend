import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingListComponent } from './pages/accounting/accounting-list/accounting-list.component';
import { CreateAccountingComponent } from './pages/accounting/create-accounting/create-accounting.component';
import { UpdateAccountingComponent } from './pages/accounting/update-accounting/update-accounting.component';
import { ApplicationListComponent } from './pages/applications/application-list/application-list.component';
import { UpdateApplicationComponent } from './pages/applications/update-application/update-application.component';
import { DeliveryListComponent } from './pages/deliveries/delivery-list/delivery-list.component';
import { UpdateDeliveryComponent } from './pages/deliveries/update-delivery/update-delivery.component';
import { DonorListComponent } from './pages/donors/donor-list/donor-list.component';
import { UpdateDonorComponent } from './pages/donors/update-donor/update-donor.component';
import { CreateEmployeeComponent } from './pages/employees/create-employee/create-employee.component';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './pages/employees/update-employee/update-employee.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { JobListComponent } from './pages/job/job-list/job-list.component';
import { UpdateJobComponent } from './pages/job/update-job/update-job.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateVolunteerComponent } from './pages/volunteers/update-volunteer/update-volunteer.component';
import { VolunteerListComponent } from './pages/volunteers/volunteer-list/volunteer-list.component';


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
    path:'employee/create', component: CreateEmployeeComponent
  },
  {
    path: 'employees/update', component: UpdateEmployeeComponent
  },
  {
    path:'apply', component: ApplicationListComponent
  },
  {
    path: 'apply/update', component: UpdateApplicationComponent
  },
  {
    path: 'delivery', component: DeliveryListComponent
  },
  {
    path: 'delivery/update', component: UpdateDeliveryComponent
  },
  {
    path: 'volunteer', component: VolunteerListComponent
  },
  {
    path: 'volunteer/update', component: UpdateVolunteerComponent
  },
  {
    path: 'donor', component: DonorListComponent
  },
  {
    path: 'donor/update', component: UpdateDonorComponent
  },
  {
    path: 'job', component: JobListComponent
  },
  {
    path: 'job/update', component: UpdateJobComponent
  },
  {
    path: 'job/create', component: CreateJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
