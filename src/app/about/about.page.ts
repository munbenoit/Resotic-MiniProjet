import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage{
  //Attribut stockant les utilisateurs issus de la requête
  users$: Object;
  constructor(private data: DataService){
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
