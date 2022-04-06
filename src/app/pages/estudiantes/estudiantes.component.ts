import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import {Estudiante} from './interface/estudiante.interface';
import {EstudianteService} from './services/estudiante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  estudiantes:Estudiante[]=[]
  currentYear:number= new Date().getFullYear();


  constructor(private estudianteSvc:EstudianteService,private router:Router) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes():void{

    this.estudianteSvc.getEstudiantes()
    .pipe(
      tap((personajesResult:Estudiante[]) =>this.estudiantes=personajesResult)
      )
    .subscribe();

  }

  goToSolicitudIngreso():void{
    this.router.navigate(['/solicitudIngreso']);
  }


}
