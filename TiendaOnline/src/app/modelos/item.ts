export class Item{
    constructor(private id:number, private nombre:string, private precio:number){} 

    get Id(){
        return this.id;
    }
}