import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environments } from '../../../environments/environments';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface admin{
  username:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  adminUsername:string=environments.adminUsername;
  adminPassword:string=environments.adminPassword

  constructor(private http:HttpClient,private router:Router) {}

  //admin login

  adminLogin(username:string,password:string){

    if(username==this.adminUsername && password==this.adminPassword){
      localStorage.setItem('token',(Math.random()+1).toString(36).substring(7))
      this.router.navigateByUrl('admin/admin-dashboard')
      console.log('admin login sucessfull');      
    }
    else{
      alert('login is failed')
      console.log('login failed');
      
    }

  }
  //search
  searchKey = new BehaviorSubject('')
  //check admin is logged in or not
  isAdminLoggedIn():Boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false
  }
  //api call to save faculty details
    addFaculty(details:any,password:any){
      
      const body ={
        details,
        password
      }
      console.log(body);
      
      return this.http.post('http://localhost:3000/addFaculty',body)
    }

    getAllFaculty(){
      console.log('hello');
      
        return this.http.get('http://localhost:3000/getFaculty')
        //json data
    }
    updateFaculty(user:any,designation:any,salary:any){
      const body={
        user,
        designation,
        salary
      }
      return this.http.post('http://localhost:3000/updateFaculty',body)
    }

    deleteFaculty(faculty_number:any){
      
      return this.http.delete('http://localhost:3000/deleteFaculty/'+faculty_number)
    }
}
