import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  user:any
  image:any
  constructor(){
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('user')||'')     
      this.image = JSON.parse(localStorage.getItem('image')||'')        
    }
  }
  ngOnInit(): void {
    
  }

}
