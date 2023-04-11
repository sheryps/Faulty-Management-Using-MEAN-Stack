import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LeaveComponent } from './employee-dashboard/leave/leave.component';
import { EmployeesComponent } from './employees.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '',component:LoginComponent },
{path:'employee-dash',component:EmployeeDashboardComponent},
{path:'skill',component:LeaveComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
