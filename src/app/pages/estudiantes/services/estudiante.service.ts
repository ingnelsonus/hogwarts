import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Estudiante} from '../interface/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl="http://hp-api.herokuapp.com/api/characters/students";
  constructor(private http:HttpClient) { }

  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.apiUrl);
  }


}
