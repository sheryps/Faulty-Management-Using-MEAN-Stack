import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdashService } from '../../userdash.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  allskills:any=[]
  skills:any
  levels:any
  userskills:any=[]
  constructor(private user:UserdashService,private router:Router){
    this.getuserSkills()
  }
  ngOnInit(): void {
    this.user.getskills().subscribe(
      (data:any)=>{
        this.allskills = data.skills       
        console.log(this.allskills);
               
      }
    )
  }
  skill(e:any){
    this.skills=e.target.value
    
  }
  level(event:any){
    this.levels=event.target.value
  }
  skillsUpdate(){
    var skills=this.skills
    var levels=this.levels
    const data = this.allskills.filter((s: { Name: any; })=>(s.Name==skills)).find((e: { Name: any; })=>e.Name===skills)
    // const data1 =this.allskills.findIndex(skills)
    console.log(data);   
    const user = JSON.parse(localStorage.getItem('currentUser')||'')     
    this.user.skillsUpdate(user,data,levels).subscribe(
      (result:any)=>{
        alert(result.message)
      },(result:any)=>{
        alert(result.error.message)
      }
    )
  }
  getuserSkills(){
    const user = JSON.parse(localStorage.getItem('currentUser')||'')
    this.user.getuserSkills(user).subscribe(
      (result:any)=>{
        this.userskills=result.userskills
        
      }
    )
  }
  
}
