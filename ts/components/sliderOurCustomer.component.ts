import { OurCustemers } from "../model/OurCustomers.model.js";

export const slider = (caruselNumber:string,id: string, arr:OurCustemers[],title:string="הלקוחות שלנו",bgColor?:string): void => {

    
  let displayDiv = document.getElementById(id);
  if(displayDiv && bgColor){
    displayDiv.style.backgroundColor=bgColor;

  }
  if (displayDiv) {
    displayDiv.setAttribute("class","caruselOurCustemers")
    displayDiv.innerHTML = `
        <div class="OurCustemers-title">
        <h2 id="test">${title}</h2>
      </div>
        `;
    const OurCustemersCards = document.createElement("div");
    OurCustemersCards.setAttribute("class", "OurCustemersCards");
    OurCustemersCards.setAttribute("id", `OurCustemersCards${caruselNumber}`);
    for(let item of arr){
        OurCustemersCards.innerHTML += `
            <div class="OurCustemersCard">
            <img src="${item.imgUrl}" alt="">
          </div>
            `;
    }
    displayDiv.appendChild(OurCustemersCards);
    console.log(displayDiv.offsetHeight);
    
  }
  
  // motion
let div = document.getElementById(`OurCustemersCards${caruselNumber}`);
let timer:number=0;
let counter:number=0;
if(div){
  console.log(div.offsetHeight);
  
    div.addEventListener("mouseenter",():void=>{
        timer=setInterval(()=>{
            if(div && div.offsetWidth>window.innerWidth){
                div.style.left=`${counter}px`;
                (counter==((div.offsetWidth-window.outerWidth)*-1))?counter=0:counter--
            }
            },5)
    })

    div.addEventListener("mouseleave",():void=>{
       clearInterval(timer);
       timer=0
})
}


// height carusela
if(displayDiv && div){
  displayDiv.style.height=`${displayDiv.offsetHeight+div.offsetHeight}px`
}
};
