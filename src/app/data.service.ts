import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  /*
  * getUsers
  * Récupère les données de tous les utilisateurs(dans notre cas des employés)
  * TODO: créer une vraie base de données des employés
  * ex: idEmp, nomEmp, prenomEmp, poste, adresse(numero, rue, ville, pays), ensemble de subordonnés(autres employés), siteEmp
  */
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  /*
  * getUser
  * Récupère les données d'un utilisateur spécifié par son id
  */
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
}
