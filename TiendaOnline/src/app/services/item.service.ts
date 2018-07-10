import { Injectable } from '@angular/core';
import { Item } from '../modelos/item';

@Injectable()
export class ItemService {

  private _itemsLista:Item[];

  constructor() {
    this._itemsLista=[
      new Item(1,"Libro",15),
      new Item(2,"Camara",125),
      new Item(3,"Agenda",10),
      new Item(4,"Ropajes viejos",-5),
      new Item(5,"Ordenador",624)
    ];
  }

  getItemsList(){
    return this._itemsLista;
  }
}
