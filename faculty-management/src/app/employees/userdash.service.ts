import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const options = {
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class UserdashService {

  constructor(private http:HttpClient) { 
    
  }
  getToken(){
    //fetch token from localstorage
    const token = JSON.parse(localStorage.getItem('Token')||'')
    console.log(token);
    
    //generate header
    let headers = new HttpHeaders()
    //append token inside the header
    if(token){
      options.headers=headers.append('x-acess-token',token)
    }
    return options
  }    
  // getemployeeDetails(email:any){
  //   const body={
  //     email
  //   }
  //   return this.http.post('http://localhost:3000/getemployeeDetails',body,this.getToken())
  // }
  //login call
  userLogin(email:any,password:any){
    const body = {
      email,
      password
    }
    return this.http.post('http://localhost:3000/userLogin',body)

  }
  updateImage(user:any,url:any){
    const body ={
      user,
      url
    }
    return this.http.post('http://localhost:3000/updateImage',body,this.getToken())
  }
  getskills(){
    
    return this.http.get('http://localhost:3000/getskills')
  }
  skillsUpdate(user:any,data:any,level:any){
    const body ={
      user,
      data,
      level
    }
    return this.http.post('http://localhost:3000/skillsUpdate',body)
  }

  getuserSkills(user:any){
    const body={
      user
    }
    return this.http.post('http://localhost:3000/getuserSkills',body)
  }

  //chnge password

  changePassword(employee:any,oldpass:any,newpass:any){
    const body={
      employee,
      oldpass,
      newpass
    }
    return this.http.post('http://localhost:3000/changePassword',body)
  }
  //editemployeedetails

  editprofile(email:any,details:any){
    const body={
      email,
      details
    }
    return this.http.post('http://localhost:3000/editprofile',body)
  }
}
