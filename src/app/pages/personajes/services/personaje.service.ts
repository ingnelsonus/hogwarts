import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private apiurl="https://hp-api.herokuapp.com/api/characters/house";
  constructor(private http:HttpClient) { }

  getPersonajes(nameCasaHechiceria:string):Observable<any>{
    return this.http.get<any>(`${this.apiurl}/${nameCasaHechiceria}`)
  }

}
