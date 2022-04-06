import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../interface/personaje.interface';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private apiurl="https://hp-api.herokuapp.com/api/characters/house";
  constructor(private http:HttpClient) { }

  getPersonajes(nameCasaHechiceria:string):Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${this.apiurl}/${nameCasaHechiceria}`)
  }

}
