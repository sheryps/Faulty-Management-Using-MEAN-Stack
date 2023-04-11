import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdashService } from '../userdash.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})

export class EmployeeDashboardComponent implements OnInit {

  editProfileForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    birth:new FormControl(),
  })
  profile:boolean=false;
  leave:boolean=false;
  user:any
  image:any
  faculty:any=[]
  constructor(private User:UserdashService,private router:Router,private fb:FormBuilder){
    
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('user')||'')
      
    }
    if(localStorage.getItem('image')){
      this.image=JSON.parse(localStorage.getItem('image')||'')    
    }
    // this.User.getemployeeDetails(this.user).subscribe(
    //   (data:any)=>{
    //     alert(data.message)
    //     this.faculty = data.faculty
    //     console.log(this.faculty);       
    //   },(data:any)=>{
    //     alert(data.error.message)
    //   }
    // )
    
  }

  ngOnInit(): void {
    this.showProfile()
    this.editProfileForm = this.fb.group({//group
      //array
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      birth:['',[Validators.required,]]
    })

  }
  editprofile(){
    const details=this.editProfileForm.value
    const email = JSON.parse(localStorage.getItem('currentUser')||'')
    this.User.editprofile(email,details).subscribe(
      (data:any)=>{
        alert(data.message)
        localStorage.removeItem('user')
        localStorage.setItem('user',JSON.stringify(data.user))
      },(data:any)=>{
        alert(data.error.message)
      }
    )
    
  }

  changepasswordForm = this.fb.group({//group
    //array
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    newpass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    confirmpass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  changepassword(){
    const oldpass=this.changepasswordForm.value.password
    const newpass=this.changepasswordForm.value.newpass
    const conpass=this.changepasswordForm.value.confirmpass
    const employee = JSON.parse(localStorage.getItem('currentUser')||'')
    
    if(newpass===conpass){
      this.User.changePassword(employee,oldpass,newpass).subscribe(
        (data:any)=>{
          alert(data.message)
        },(data:any)=>{
          alert(data.error.message)
        }
      )
      
    }else{
      alert('Same password should be entered')
    }
    
    
  }
  setoff(){
    this.profile=false;
    this.leave=false

  }
  showProfile(){
    this.setoff()
    this.profile=true
  }
  showLeave(){
    this.setoff()
    this.leave=true
  }
  url=''
  onselectFile(e:any){
    if(e.target.files){
      console.log(e.target.files);
      
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        
      }
    }
  }
  updateImage(url:any){    
    const user = JSON.parse(localStorage.getItem('currentUser')||'')
    console.log(user);
    
    this.User.updateImage(user,url).subscribe(
      (data:any)=>{

        localStorage.setItem('image',JSON.stringify(data.image))
        alert(data.message)
        this.router.navigateByUrl('employees/employee-dash')
      },(data:any)=>{
        alert(data.error.message)
      }
    )
    
    
  }
  signoutEmployee(){
      localStorage.removeItem('Token')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('user')
      localStorage.removeItem('image')
      this.router.navigateByUrl('/')
  }
}


