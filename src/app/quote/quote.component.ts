import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  constructor(private api:ApiService){
    api.fetchquote().subscribe(
      (response)=>{
        this.qt=response
      }
    )
  }
qt:any=[]
}
