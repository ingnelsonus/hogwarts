import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay, switchMap, tap } from 'rxjs/operators';
import { SolicitudIngreso } from './interface/solicitudIngreso.interface';
import {SolicitudIngresoService} from './services/solicitud-ingreso.service';

@Component({
  selector: 'app-solicitud-ingreso',
  templateUrl: './solicitud-ingreso.component.html',
  styleUrls: ['./solicitud-ingreso.component.scss']
})
export class SolicitudIngresoComponent implements OnInit {

  model={
    name:'faneusCode',
    Email:'',
    CellPhone:''
  };

  solicitudes:SolicitudIngreso[]=[]

  constructor(private solicitudIngresoSvc:SolicitudIngresoService) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes():void{
    this.solicitudIngresoSvc.getSolicitudes()
    .pipe(
      tap((solicitudesResult:SolicitudIngreso[])=>this.solicitudes=solicitudesResult)
    )
    .subscribe();
  }


  onSubmit({value:formData}:NgForm):void{
    console.log('Guardar',formData);
    const dataRequest:SolicitudIngreso ={
      ...formData,
      requestDate:this.getCurrentDate()
    }

    this.solicitudIngresoSvc.saveSelicitud(dataRequest)
    .pipe(
      tap(res =>console.log('newRequest ->',res)),
      delay(2000),
      tap(()=>this.getSolicitudes())
    ).subscribe();
  }


  private getCurrentDate():string{
    return new Date().toLocaleDateString();
  }

}
