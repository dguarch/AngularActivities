import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../modelos/item';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  itemsLista:Item[];

  constructor(private _itemService:ItemService) { }

  ngOnInit() {
    this.itemsLista=this._itemService.getItemsList();
  }

  addItem(id:number){
    console.log(id);
    let elItem= this.itemsLista.find((unItem:Item)=>{
      return unItem.Id==id;
    });
    return elItem;
  }

}
