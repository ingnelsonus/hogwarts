import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) },
  { path: 'estudiantes', loadChildren: () => import('./pages/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'profesores', loadChildren: () => import('./pages/profesores/profesores.module').then(m => m.ProfesoresModule) },
  { path: 'solicitudIngreso', loadChildren: () => import('./pages/solicitud-ingreso/solicitud-ingreso.module').then(m => m.SolicitudIngresoModule) },
  {path:'**',redirectTo:'',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
