import { displayNavBar } from "./components/navBar.component.js";
import {floutContactButtonDisplay} from "./components/floatbutton.component.js"
import {caruselFourCardDisplay} from "./components/carusel.component.js"
import {productArr} from "./db/proudact.db.js"
import { slider } from "./components/sliderOurCustomer.component.js";
import {custemersArr} from "./db/Custemers.db.js"
displayNavBar("navBarDivForDisplay");
floutContactButtonDisplay("fixedContactUsPopupDivForDisplay");



caruselFourCardDisplay("1","caruselDivForDisplay",productArr,"מוצרים חמים","rtl");





slider("1","caruselOurCustemers",custemersArr,"Our custumers")


// console.log(productArr[0].imgs[0]);
console.log(productArr);



