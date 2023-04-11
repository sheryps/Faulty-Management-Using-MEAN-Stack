import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdashService } from '../userdash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,private fb:FormBuilder,private user:UserdashService){

  }
  ngOnInit(): void {
    
  }
  loginForm = this.fb.group({//group
    //array
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })
  admin(){
    this.router.navigateByUrl('admin')
  }
  employeeLogin(){
    var email=this.loginForm.value.username;
    var password=this.loginForm.value.password;
    if(this.loginForm.valid){
      this.user.userLogin(email,password).subscribe(
        (result:any)=>{        
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem('Token',JSON.stringify(result.token))
          localStorage.setItem('user',JSON.stringify(result.user))
          localStorage.setItem('image',JSON.stringify(result.user.image))
          alert(result.message)
          this.router.navigateByUrl('employees/employee-dash')
          },
            result=>{
              alert(result.error.message)
            }
        )}
      
        else{
          alert('Login Failure')
          console.log(this.loginForm.get('uname')?.errors);
        }
      }
    adminLogin(){
      this.router.navigateByUrl('admin')
    }  
  }
