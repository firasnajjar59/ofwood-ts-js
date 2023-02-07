import { categoreArr } from "../db/categore.db.js";
import { Prouduct } from "../model/Product.model.js";

export const storePage=(id:string,arr:Prouduct[])=>{
let divToDisplay=document.getElementById(id);
let openedCategoreDiv:string;
const display=()=>{
    if(divToDisplay){
        divToDisplay.setAttribute("class","displayProudactWrapper")
        divToDisplay.innerHTML=`
        <div id="leftAside" class="left">
        </div>
        <div class="right">
        <div dir="rtl" class="filter-Wrapper">
        <h2>סינון לפי</h2>
        <hr>
        <div class="categore ">
          <div id="categoreOption" class="categore-title">
            <h5>אוסף</h5>
            <span id="icon" class="material-symbols-rounded">
              add
              </span>
          </div>
          <div id="option" class="categore-Item hidden">
            <ul id="displayCategore">
              <li id="allProduct" class="active">הכל</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        `
        let check=localStorage.getItem("openedCategoreDiv")
        if(check){
            openedCategoreDiv=check
        }else{
            localStorage.setItem("openedCategoreDiv","true")
            openedCategoreDiv="true";
        }
        if(openedCategoreDiv=="true"){
            let option=document.getElementById(`option`);
            let icon=document.getElementById(`icon`);
            if(icon){
                icon.innerHTML="remove"

            }
          option?.classList.remove('hidden')
        }
        let btn=document.getElementById(`allProduct`);
        btn?.addEventListener("click",()=>{
            display();
            displayFilterUrgument();
            displayProduct(arr);
        })
        let categoreOption=document.getElementById(`categoreOption`);
        categoreOption?.addEventListener("click",()=>{
            let option=document.getElementById(`option`);
          option?.classList.toggle('hidden');
          
          if(option?.classList.contains("hidden")){
              localStorage.setItem("openedCategoreDiv","false")
              let icon=document.getElementById(`icon`);
            if(icon){
                icon.innerHTML="add"

            }
            }else{
                localStorage.setItem("openedCategoreDiv","true")
                let icon=document.getElementById(`icon`);
                if(icon){
                    icon.innerHTML="remove"

                }
            }
            console.log(option?.classList.contains("hidden"));
        })
        
    
    
    }        
}

const displayFilterUrgument=()=>{
    let displayCategore=document.getElementById('displayCategore')

    if(displayCategore){
        let counter:number=1
        for(let item of categoreArr){
            let li=document.createElement('li');
            li.innerHTML=item.categore;
            li.setAttribute("id",`btnLi${counter}`)
            displayCategore.appendChild(li)
            let btn=document.getElementById(`btnLi${counter}`) as HTMLElement;
            if(btn){
                btn.addEventListener("click",(e:Event)=>{
                    
                    display();
                    displayFilterUrgument()
                    let target=e.target
                    if(target){
                        let btn=document.getElementById(`${target.id}`); 
                        if(btn){
                            btn.classList.add("active");
                        }
                    }
                    document.getElementById(`allProduct`)?.classList.remove("active");
                    filter(`${item.categore}`)
                })

            }
            counter++
        }
    }
}

const displayProduct=(arr:Prouduct[])=>{
    let leftAside=document.getElementById("leftAside");
    if(leftAside){
        leftAside.innerHTML=""
    for(let item of arr){
        let card=document.createElement('div');
        card.setAttribute("class","caruselCardWrapper")
            card.innerHTML=`
            <div class="ribbon">${item.ribbon}</div>
            <img id="product${item.id}" src="${item.imgs[0]}" alt="${item.title}">
            <div class="deatils">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button>הוספה לסל</button>
            </div>
            `
            leftAside.appendChild(card);
            document.getElementById(`product${item.id}`)?.addEventListener("click",()=>{
                linkProductToPage(`${item.id}`)
            })
        }

    }
}

const filter=(inp:string)=>{
    let filteredProuduct:Prouduct[]=[];
    filteredProuduct=arr.filter(item=>item.categore==inp)
    displayProduct(filteredProuduct);
}

const linkProductToPage=(id:string)=>{
    localStorage.setItem("productId",id);
    location.assign('./productList.html');
}
display()
displayFilterUrgument()
displayProduct(arr)
}