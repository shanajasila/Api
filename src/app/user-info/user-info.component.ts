import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  constructor(private api:ApiService){
    api.fetchinfo().subscribe(
      (response)=>{
        this.user=response
      }
    )
  }
user:any=[]
}
