import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdminAuthService } from '../../service/admin-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginData = new FormGroup({
    username:new FormControl,
    password:new FormControl
  })
  constructor(private fb:FormBuilder,private adminAuth:AdminAuthService,private router:Router){}
  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
   
    )
  }
  adminLogin(){
    this.adminAuth.adminLogin(this.adminLoginData.value.username,this.adminLoginData.value.password)

}
employeeLogin(){
  alert('yes')
  this.router.navigateByUrl('employees')
}

}
