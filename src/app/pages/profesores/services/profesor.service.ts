import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Profesor} from '../interface/profesor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private apiUrl='http://hp-api.herokuapp.com/api/characters/staff';
  constructor(private http:HttpClient) { }

  getProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.apiUrl);
  }

}
