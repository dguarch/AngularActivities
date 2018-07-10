import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tareas';

@Injectable()
export class TareaService {

  private _tareaLista:Tarea[];

  constructor() {
    this._tareaLista=[
      new Tarea(1,"Aprender Angular", 3.4,1),
      new Tarea(2,"Hacer funcionar Jenkins", 1,1),
      new Tarea(3,"Seguir aprendiendo Angular", 3.4,1),
      new Tarea(4,"Tomar un descanso", 5,2)
    ];
  }

  generarTareas():Tarea[]{
    console.log(this._tareaLista);
    return this._tareaLista;
  }
}
