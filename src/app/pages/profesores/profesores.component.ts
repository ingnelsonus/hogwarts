import { Component, OnInit } from '@angular/core';
import {ProfesorService} from './services/profesor.service';
import {Profesor} from './interface/profesor.interface';
import { tap } from 'rxjs';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  displayedColumns: string[] = ['name', 'patronus', 'dateOfBirth', 'yearOfBirth','image'];
  dataSource:Profesor[] =[] ;
  currentYear:number =new Date().getFullYear();

  constructor(private profesorSvc:ProfesorService) { }

  ngOnInit(): void {
    //Initial Load of teachers
    this.getProfesores();
  }

  getProfesores():void{
    this.profesorSvc.getProfesores()
    .pipe(
      tap((profesoresResult:Profesor[])=>this.dataSource=profesoresResult)
    )
    .subscribe();
  }

}
