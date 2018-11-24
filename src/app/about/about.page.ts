import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http'
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage{
  users$: Object;
  constructor(private data: DataService){
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }
  /*this.data.getUsers().subscribe(
    data => this.users$ = data
  )*/

}
