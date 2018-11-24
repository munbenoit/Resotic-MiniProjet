import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage{
  users$: Observable<any>;
  constructor(private httpClient: HttpClient){
    this.users$ = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    this.users$.subscribe(data=>this.users$=data);
  }
  /*this.data.getUsers().subscribe(
    data => this.users$ = data
  )*/

}
