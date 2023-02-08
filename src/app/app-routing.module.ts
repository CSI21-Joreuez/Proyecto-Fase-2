import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'incidencias', loadChildren: () => import('./vistas/incidencias/incidencias.module').
then(m =>m.IncidenciasModule)},
{path:'form', loadChildren: () => import('./vistas/form-incidencias/form-incidencias.module').
then(m =>m.FormIncidenciasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
