import { Component } from '@angular/core';
import { AdminAuthService } from 'src/app/admin/service/admin-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private Auth:AdminAuthService){}
  search(event:any){
    let searchKey = event.target.value
    this.Auth.searchKey.next(searchKey)
  }
}
