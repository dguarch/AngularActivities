import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  listaMenu:string[];
  unClase:string="rojo";
  showTitle:boolean=true;
  
  constructor() { 
    this.listaMenu = ["Tareas","Proyectos","Quienes somos"];
  }

  ngOnInit() {
  }

}
