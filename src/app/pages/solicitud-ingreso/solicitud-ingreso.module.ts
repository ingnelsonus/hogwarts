import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { FormsModule } from '@angular/forms';


import { SolicitudIngresoRoutingModule } from './solicitud-ingreso-routing.module';
import { SolicitudIngresoComponent } from './solicitud-ingreso.component';


@NgModule({
  declarations: [
    SolicitudIngresoComponent
  ],
  imports: [
    CommonModule,
    SolicitudIngresoRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class SolicitudIngresoModule {

 }
