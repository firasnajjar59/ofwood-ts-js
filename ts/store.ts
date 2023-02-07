import { displayNavBar } from "./components/navBar.component.js";
import {floutContactButtonDisplay} from "./components/floatbutton.component.js"
import {productArr} from "./db/proudact.db.js"
import { storePage } from "./components/storePage.component.js";

displayNavBar("navBarDivForDisplay");
floutContactButtonDisplay("fixedContactUsPopupDivForDisplay");


storePage("divToDisplay",productArr);