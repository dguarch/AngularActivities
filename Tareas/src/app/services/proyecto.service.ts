import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _proyectos:Proyecto[];

  constructor() {
    this._proyectos=[
      new Proyecto(1,"Modulo 3"),
      new Proyecto(2,"Modulo 4")
    ];
   }

   generarProyectos(){
     return this._proyectos;
   }
}
