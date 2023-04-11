import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent {
  user:any
  image:any
  constructor(){
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('user')||'')     
      this.image = JSON.parse(localStorage.getItem('image')||'')        
    }
  }

}
