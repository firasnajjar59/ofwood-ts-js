export const caruselFourCardDisplay = (counter, id, arr, title = "מוצרים חדשים", dir = "ltr") => {
    let display1 = 0;
    let display2 = 1;
    let display3 = 2;
    let display4 = 3;
    const display = (id, arr) => {
        let idDisplay = document.getElementById(id);
        if (idDisplay) {
            idDisplay.setAttribute("class", "caruselWrapper mt-3");
            idDisplay.innerHTML = `
            <h2  dir="${dir}">${title}</h2>
            <div class="caruselcardsWrapper">
              <div class="caruselCardWrapper">
                <div class="ribbon">${arr[display1].ribbon}</div>
                <img id="BtnToProductPage${arr[display1].id}" src="${arr[display1].imgs[0]}" alt="">
                <div class="deatils">
                  <h3>${arr[display1].title}</h3>
                  <p>${arr[display1].price}</p>
                  <button>הוספה לסל</button>
                </div>
              </div>
              <div class="caruselCardWrapper">
                <div class="ribbon">${arr[display2].ribbon}</div>
                <img id="BtnToProductPage${arr[display2].id}" src="${arr[display2].imgs[0]}" alt="">
                <div class="deatils">
                  <h3>${arr[display2].title}</h3>
                  <p>${arr[display2].price}</p>
                  <button>הוספה לסל</button>
                </div>
              </div>
              <div class="caruselCardWrapper">
                <div class="ribbon">${arr[display3].ribbon}</div>
                <img id="BtnToProductPage${arr[display3].id}" src="${arr[display3].imgs[0]}" alt="">
                <div class="deatils">
                  <h3>${arr[display3].title}</h3>
                  <p>${arr[display3].price}</p>
                  <button>הוספה לסל</button>
                </div>
              </div>
              <div class="caruselCardWrapper">
                <div class="ribbon">${arr[display4].ribbon}</div>
                <img id="BtnToProductPage${arr[display4].id}" src="${arr[display4].imgs[0]}" alt="">
                <div class="deatils">
                  <h3>${arr[display4].title}</h3>
                  <p>${arr[display4].price}</p>
                  <button>הוספה לסל</button>
                </div>
              </div>
              <div id="backwordBtn${counter}" class="arrow-btn-left">
              <img  src="./assets/imgs/icons/left.png" alt="">
              </div>
              <div id="forwordBtn${counter}" class="arrow-btn-right">
              <img src="./assets/imgs/icons/right.png" alt="">
              </div>
            </div>
            `;
        }
        let forwordBtn = document.getElementById(`forwordBtn${counter}`);
        if (forwordBtn) {
            forwordBtn.addEventListener("click", forwordProduct);
        }
        let backwordBtn = document.getElementById(`backwordBtn${counter}`);
        if (backwordBtn) {
            backwordBtn.addEventListener("click", backwordProduct);
        }
        let btn1 = document.getElementById(`BtnToProductPage${arr[display1].id}`);
        let btn2 = document.getElementById(`BtnToProductPage${arr[display2].id}`);
        let btn3 = document.getElementById(`BtnToProductPage${arr[display3].id}`);
        let btn4 = document.getElementById(`BtnToProductPage${arr[display4].id}`);
        if (btn1 && btn2 && btn3 && btn4) {
            btn1.addEventListener("click", () => {
                localStorage.setItem("productId", `${arr[display1].id}`);
                location.assign('./productList.html');
            });
            btn2.addEventListener("click", () => {
                localStorage.setItem("productId", `${arr[display2].id}`);
                location.assign('./productList.html');
            });
            btn3.addEventListener("click", () => {
                localStorage.setItem("productId", `${arr[display3].id}`);
                location.assign('./productList.html');
            });
            btn4.addEventListener("click", () => {
                localStorage.setItem("productId", `${arr[display4].id}`);
                location.assign('./productList.html');
            });
        }
    };
    const forwordProduct = () => {
        display1 + 1 < arr.length ? display1++ : (display1 = 0);
        display2 + 1 < arr.length ? display2++ : (display2 = 0);
        display3 + 1 < arr.length ? display3++ : (display3 = 0);
        display4 + 1 < arr.length ? display4++ : (display4 = 0);
        display(id, arr);
    };
    const backwordProduct = () => {
        display1 - 1 >= 0 ? display1-- : (display1 = arr.length - 1);
        display2 - 1 >= 0 ? display2-- : (display2 = arr.length - 1);
        display3 - 1 >= 0 ? display3-- : (display3 = arr.length - 1);
        display4 - 1 >= 0 ? display4-- : (display4 = arr.length - 1);
        display(id, arr);
    };
    display(id, arr);
};
