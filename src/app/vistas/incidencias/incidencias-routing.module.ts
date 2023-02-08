import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './incidencias.component';
const routes: Routes = [
  {path: '', component: IncidenciasComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciasRoutingModule { }
