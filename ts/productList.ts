import { Prouduct } from "./model/Product.model.js";
import { productArr } from "./db/proudact.db.js";
import { displayNavBar } from "./components/navBar.component.js";
import { floutContactButtonDisplay } from "./components/floatbutton.component.js";
import { product } from "./components/product.Component.js";

let productArrJson:Prouduct[];
let checklocalStorge=localStorage.getItem("productArr");
if(checklocalStorge){
    productArrJson=JSON.parse(checklocalStorge);
}else{
    productArrJson=productArr; 
}








displayNavBar("navBarDisplay");
floutContactButtonDisplay("fixedContactUsPopupDivForDisplay")



let productId:number;
let checklocalStorgeForId=localStorage.getItem("productId");
if(checklocalStorgeForId){
    productId=JSON.parse(checklocalStorgeForId)as number;
}else{
    productId=6; 
}


product("productPage",productArrJson,productId)