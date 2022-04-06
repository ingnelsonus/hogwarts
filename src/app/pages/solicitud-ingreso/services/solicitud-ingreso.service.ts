import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SolicitudIngreso} from '../interface/solicitudIngreso.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudIngresoService {

  private apiUrl='http://localhost:3001';
  constructor(private http:HttpClient) { }

  getSolicitudes():Observable<SolicitudIngreso[]>{
    return this.http.get<SolicitudIngreso[]>(`${this.apiUrl}/solicitudesIngreso`)
  }

  saveSelicitud(newSolicitud:SolicitudIngreso):Observable<SolicitudIngreso>{
    return this.http.post<SolicitudIngreso>(`${this.apiUrl}/solicitudesIngreso`,newSolicitud);
  }

}
