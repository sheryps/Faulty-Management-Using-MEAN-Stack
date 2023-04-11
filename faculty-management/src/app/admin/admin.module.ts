import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyComponent } from './components/admin-dashboard/faculty/faculty.component';
import { FacultyTrainingsComponent } from './components/admin-dashboard/faculty-trainings/faculty-trainings.component';
import { FilterPipe } from './components/admin-dashboard/pipes/filter.pipe';
import { HeaderComponent } from './components/admin-dashboard/header/header.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AdminDashboardComponent,
    FacultyComponent,
    FacultyTrainingsComponent,
    FilterPipe,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
