import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './pages/employees/create-employee/create-employee.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { UpdateEmployeeComponent } from './pages/employees/update-employee/update-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDonorComponent } from './pages/donors/create-donor/create-donor.component';
import { DonorListComponent } from './pages/donors/donor-list/donor-list.component';
import { UpdateDonorComponent } from './pages/donors/update-donor/update-donor.component';
import { CreateDonationComponent } from './pages/donations/create-donation/create-donation.component';
import { DonationListComponent } from './pages/donations/donation-list/donation-list.component';
import { UpdateDonationComponent } from './pages/donations/update-donation/update-donation.component';
import { CreateApplicationComponent } from './pages/applications/create-application/create-application.component';
import { ApplicationListComponent } from './pages/applications/application-list/application-list.component';
import { UpdateApplicationComponent } from './pages/applications/update-application/update-application.component';
import { CreateAccountingComponent } from './pages/accounting/create-accounting/create-accounting.component';
import { AccountingListComponent } from './pages/accounting/accounting-list/accounting-list.component';
import { UpdateAccountingComponent } from './pages/accounting/update-accounting/update-accounting.component';
import { CreateDeliveryComponent } from './pages/deliveries/create-delivery/create-delivery.component';
import { DeliveryListComponent } from './pages/deliveries/delivery-list/delivery-list.component';
import { UpdateDeliveryComponent } from './pages/deliveries/update-delivery/update-delivery.component';
import { CreateVolunteerComponent } from './pages/volunteers/create-volunteer/create-volunteer.component';
import { VolunteerListComponent } from './pages/volunteers/volunteer-list/volunteer-list.component';
import { UpdateVolunteerComponent } from './pages/volunteers/update-volunteer/update-volunteer.component';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { JobListComponent } from './pages/job/job-list/job-list.component';
import { UpdateJobComponent } from './pages/job/update-job/update-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CreateDonorComponent,
    DonorListComponent,
    UpdateDonorComponent,
    CreateDonationComponent,
    DonationListComponent,
    UpdateDonationComponent,
    CreateApplicationComponent,
    ApplicationListComponent,
    UpdateApplicationComponent,
    CreateAccountingComponent,
    AccountingListComponent,
    UpdateAccountingComponent,
    CreateDeliveryComponent,
    DeliveryListComponent,
    UpdateDeliveryComponent,
    CreateVolunteerComponent,
    VolunteerListComponent,
    UpdateVolunteerComponent,
    CreateJobComponent,
    JobListComponent,
    UpdateJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
