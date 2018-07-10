import { Injectable } from '@angular/core';

@Injectable() 
export class LogoService {

  frase:string="Hola Mundo!!";

  decirHola(){
    return this.frase;
  }

  constructor() { }
}
