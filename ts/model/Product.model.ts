interface description{
        description:string;
        width?:string;
        hight?:string;
        length?:string;
        notes?:string;
}
let currentId=0;
export class Prouduct{
    title:string;
    description:description;
    price:number;
    categore:string;
    color:string[];
    imgs:string[];
    id:number;
    ribbon?:string;
    constructor(
        title:string,
        description:description,
        price:number,
        categore:string,
        color:string[],
        imgs:string[],
        ribbon?:string
        
    ){
        this.title=title;
        this.description=description;
        this.price=price;
        this.categore=categore;
        this.color=color;
        this.imgs=imgs;
        this.id=this.idGenerator();
        this.ribbon=ribbon;
    }
    idGenerator=():number=>{
        if(localStorage.getItem("currentId")){
            currentId=localStorage.getItem("currentId")as unknown as number;
            currentId++;
            localStorage.setItem("currentId",currentId+"");
            return currentId
        }else{
            currentId++;
            localStorage.setItem("currentId",currentId+"");
            return currentId
        }
    }

}