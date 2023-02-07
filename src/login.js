import { displayNavBar } from "./components/navBar.component.js";
import { floutContactButtonDisplay } from "./components/floatbutton.component.js";
import { slider } from "./components/sliderOurCustomer.component.js";
import { custemersArr } from "./db/Custemers.db.js";
displayNavBar("navBarDivForDisplay");
floutContactButtonDisplay("fixedContactUsPopupDivForDisplay");
slider("1", "carusel", custemersArr);
