import { categoreArr } from "../db/categore.db.js";
export const storePage = (id, arr) => {
    let divToDisplay = document.getElementById(id);
    let openedCategoreDiv;
    const display = () => {
        if (divToDisplay) {
            divToDisplay.setAttribute("class", "displayProudactWrapper");
            divToDisplay.innerHTML = `
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
        `;
            let check = localStorage.getItem("openedCategoreDiv");
            if (check) {
                openedCategoreDiv = check;
            }
            else {
                localStorage.setItem("openedCategoreDiv", "true");
                openedCategoreDiv = "true";
            }
            if (openedCategoreDiv == "true") {
                let option = document.getElementById(`option`);
                let icon = document.getElementById(`icon`);
                if (icon) {
                    icon.innerHTML = "remove";
                }
                option === null || option === void 0 ? void 0 : option.classList.remove('hidden');
            }
            let btn = document.getElementById(`allProduct`);
            btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
                display();
                displayFilterUrgument();
                displayProduct(arr);
            });
            let categoreOption = document.getElementById(`categoreOption`);
            categoreOption === null || categoreOption === void 0 ? void 0 : categoreOption.addEventListener("click", () => {
                let option = document.getElementById(`option`);
                option === null || option === void 0 ? void 0 : option.classList.toggle('hidden');
                if (option === null || option === void 0 ? void 0 : option.classList.contains("hidden")) {
                    localStorage.setItem("openedCategoreDiv", "false");
                    let icon = document.getElementById(`icon`);
                    if (icon) {
                        icon.innerHTML = "add";
                    }
                }
                else {
                    localStorage.setItem("openedCategoreDiv", "true");
                    let icon = document.getElementById(`icon`);
                    if (icon) {
                        icon.innerHTML = "remove";
                    }
                }
                console.log(option === null || option === void 0 ? void 0 : option.classList.contains("hidden"));
            });
        }
    };
    const displayFilterUrgument = () => {
        let displayCategore = document.getElementById('displayCategore');
        if (displayCategore) {
            let counter = 1;
            for (let item of categoreArr) {
                let li = document.createElement('li');
                li.innerHTML = item.categore;
                li.setAttribute("id", `btnLi${counter}`);
                displayCategore.appendChild(li);
                let btn = document.getElementById(`btnLi${counter}`);
                if (btn) {
                    btn.addEventListener("click", (e) => {
                        var _a;
                        display();
                        displayFilterUrgument();
                        let target = e.target;
                        if (target) {
                            let btn = document.getElementById(`${target.id}`);
                            if (btn) {
                                btn.classList.add("active");
                            }
                        }
                        (_a = document.getElementById(`allProduct`)) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
                        filter(`${item.categore}`);
                    });
                }
                counter++;
            }
        }
    };
    const displayProduct = (arr) => {
        var _a;
        let leftAside = document.getElementById("leftAside");
        if (leftAside) {
            leftAside.innerHTML = "";
            for (let item of arr) {
                let card = document.createElement('div');
                card.setAttribute("class", "caruselCardWrapper");
                card.innerHTML = `
            <div class="ribbon">${item.ribbon}</div>
            <img id="product${item.id}" src="${item.imgs[0]}" alt="${item.title}">
            <div class="deatils">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button>הוספה לסל</button>
            </div>
            `;
                leftAside.appendChild(card);
                (_a = document.getElementById(`product${item.id}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                    linkProductToPage(`${item.id}`);
                });
            }
        }
    };
    const filter = (inp) => {
        let filteredProuduct = [];
        filteredProuduct = arr.filter(item => item.categore == inp);
        displayProduct(filteredProuduct);
    };
    const linkProductToPage = (id) => {
        localStorage.setItem("productId", id);
        location.assign('./productList.html');
    };
    display();
    displayFilterUrgument();
    displayProduct(arr);
};
