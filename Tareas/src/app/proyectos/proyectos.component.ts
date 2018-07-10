import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../modelos/proyecto'
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectoListas:Proyecto[];

  constructor(private _listaService:ProyectoService) { }

  ngOnInit() {
    this.proyectoListas=this._listaService.generarProyectos();
  }

  fondoTabla:string="";
  colorFondo(){
    console.log("Pasando por encima de la tabla");
    this.fondoTabla="rojo";
  }
}
