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
  status : boolean = false;
  constructor(private data: DataService){
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }
  /*
  * modalState
  * Open and close the addEmployee modal
  */
  modalState(){
    this.status = !this.status;
  }

  /*
  * submit
  * This function will verify the information and send a POST request
  */
  submit(){
    this.status = !this.status;
  }

}
