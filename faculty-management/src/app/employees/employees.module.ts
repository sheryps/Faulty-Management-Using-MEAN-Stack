import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ProfileComponent } from './employee-dashboard/profile/profile.component';
import { EmpHeaderComponent } from './employee-dashboard/emp-header/emp-header.component';
import { LeaveComponent } from './employee-dashboard/leave/leave.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDashboardComponent,
    ProfileComponent,
    EmpHeaderComponent,
    LeaveComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeesModule { }
