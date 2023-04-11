import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './admin/components/login/login.component';
import { AdminGuard } from './service/admin.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'employees',pathMatch:'full'
  },
  {path:'admin',component:AdminComponent,children:[
    {path:'',component:LoginComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminGuard]}
  ]},

  { path:'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
