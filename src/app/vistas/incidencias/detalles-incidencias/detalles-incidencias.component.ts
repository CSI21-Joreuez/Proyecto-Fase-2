import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-detalles-incidencias',
  templateUrl: './detalles-incidencias.component.html',
  styleUrls: ['./detalles-incidencias.component.css']
})
export class DetallesIncidenciasComponent implements OnInit {
  formIncidencia = this.fb.group({
    descipcion: ['', Validators.required],
    lugarIncidencia: [''],
    posibleSolucion: [''],
    estadoIncidencias: [''],
  });
  documentId: string = '';
  incidencia: any;

  constructor(  private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: ServicesService) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.fire.getOne('incidencias', this.documentId).subscribe((resp: any) => { 
      this.formIncidencia.setValue(resp.payload.data() );
    });
  }

}
