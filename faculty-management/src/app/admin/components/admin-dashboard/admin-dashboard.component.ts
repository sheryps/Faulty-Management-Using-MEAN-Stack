import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  faculty:boolean=false;
  training:boolean=false
  constructor(private router:Router){}
  ngOnInit(): void {
    this.showfacultyData()
  }
  setoff(){
    this.faculty=false;
    this.training=false;
  }
  showfacultyData(){
    this.setoff()
    this.faculty=true
  }
  showTrainingData(){
    this.setoff()
    this.training=true
  }
  signOut(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('employees')
  }
  ondelete(event:any){
    alert('yes?')
  }
}
