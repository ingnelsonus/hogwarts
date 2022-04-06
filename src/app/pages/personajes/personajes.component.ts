import { Component, OnInit } from '@angular/core';
import {PersonajeService} from './services/personaje.service';
import {Personaje} from './interface/personaje.interface'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  model={
    nameCasaHechiceria:''
  }
  CasasHechiceria :string []=['slytherin','gryffindor','ravenclaw','hufflepuff'];
  selectedHouse!:string;
  personajes! :Personaje[];
  currentYear:number = new Date().getFullYear();

  constructor(private personajeSvc:PersonajeService) { }

  ngOnInit(): void {
  }

  getPersonajes():void{

    this.personajeSvc.getPersonajes(this.selectedHouse)
    .pipe(
      tap((personajesResult:Personaje[]) =>this.personajes=personajesResult)
      )
    .subscribe();

  }

}
