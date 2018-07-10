export class Proyecto{
    constructor(private pid:number, private titulo:string){
    }

    getPid(){
        return this.pid;
    }

    getTitulo(){
        return this.titulo;
    }

}