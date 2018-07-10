import { Component, OnInit } from '@angular/core';
import { Tarea } from '../modelos/tareas';
import { TareaService } from '../services/tarea.service';
import { Proyecto } from '../modelos/proyecto';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas:Tarea[];
  listaProyectos:Proyecto[]

  constructor(private _tareaService:TareaService, private _proyectoService:ProyectoService) {}
  
  ngOnInit(){
    this.listaTareas=this._tareaService.generarTareas();
    console.log(this.listaTareas);
    this.listaProyectos=this._proyectoService.generarProyectos();
  }

  evalPar(id:number){
    return id%2==0;
  }

  getProjectName(pid:number){
    let elProyecto= this.listaProyectos.find((unProj:Proyecto)=>{
      return unProj.getPid()==pid;
    });
    return elProyecto?elProyecto.getTitulo():'';
  }
}

