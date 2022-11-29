import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.component.html',
  styleUrls: ['./viewphotos.component.css']
})
export class ViewphotosComponent {

  constructor(private api:ApiService) {
    api.photos().subscribe(

      (response)=>{
        this.data=response;
      }

    )
  }

  data:any=[]
}
