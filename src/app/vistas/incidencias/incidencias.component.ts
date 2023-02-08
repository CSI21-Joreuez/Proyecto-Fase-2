import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  coleccion = 'incidencias';
  incidencia: any[] = [];
  displayedColumns: string[] = ['Descripcion','Lugar', 'Estado', 'Solucion', 'Revision'];

  constructor( private firebase: ServicesService) { }

  ngOnInit(): void {
     // Cargamos la lista de incidencias
     this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.incidencia = [];
        resp.forEach( (snap: any) => {
          this.incidencia.push(
            {
              documentId: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          )
        });
  })}
  
}
