import { Component, OnInit } from '@angular/core';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  
  statusM:boolean=false;
  fraseLocal:string;

  constructor(private _logoServicio:LogoService){}
  
  changeM(){
    this.fraseLocal=this._logoServicio.decirHola();
    this.statusM=!this.statusM;
  }
}