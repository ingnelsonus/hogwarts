import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  getPersonajes():void{

    console.log('CasaHechiceera: ',this.selectedHouse);

  }

}
