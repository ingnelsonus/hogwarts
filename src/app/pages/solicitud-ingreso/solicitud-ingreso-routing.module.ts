import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudIngresoComponent } from './solicitud-ingreso.component';

const routes: Routes = [{ path: '', component: SolicitudIngresoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudIngresoRoutingModule { }
