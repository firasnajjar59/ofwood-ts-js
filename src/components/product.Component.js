export const product = (id, productArrUrg, productid) => {
    let idDisplay = document.getElementById(id);
    let imgIdToDisplay = 0;
    const idProduct = () => {
        for (let i = 0; i < productArrUrg.length; i++) {
            if (productArrUrg[i].id === productid) {
                return i;
            }
        }
        return 0;
    };
    let prouductToDisplat = idProduct();
    const display = () => {
        if (idDisplay) {
            idDisplay.innerHTML = `
          <div class="oneProductCaruselWrapper">
                      <div class="caruselImg">
                          <img src="${productArrUrg[prouductToDisplat].imgs[imgIdToDisplay]}" alt="">
                      </div>
                      <div id="indecator" class="indecator">
                         
                      </div>
                      <div class="descriptionWrapper">
                        <div class="leftAside">
                          <h1 dir="rtl" >${productArrUrg[prouductToDisplat].title}</h1>
                          <p  dir="rtl" class="productDescription">${productArrUrg[prouductToDisplat].description.description}</p>
                          <div dir="rtl" class="accordioneWrapper">
                            <div class="oneSection">
                              <h4>מדיניות החזרה</h4>
                              <p>יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).</p>
                              <hr>
                            </div>
                            <div class="oneSection">
                              <h4>מדיניות החזרה</h4>
                              <p class="hidden">יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).</p>
                              <hr>
                            </div>
                            <div class="oneSection">
                              <h4>מדיניות החזרה</h4>
                              <p class="hidden">יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).</p>
                              <hr>
                            </div>
                          </div>
                        </div>
                        <div class="rightAside">
                          <p>${productArrUrg[prouductToDisplat].price}</p>
                          <div class="colorComponent">
                            <p>צבע</p>
                            <div class="colorPicker">
                              <div class="color" style="background-color: ${productArrUrg[prouductToDisplat].color[0]};"></div>
                              <div class="color" style="background-color: ${productArrUrg[prouductToDisplat].color[1]};"></div>
                              <div class="color" style="background-color: ${productArrUrg[prouductToDisplat].color[2]};"></div>
                            </div>
                          </div>
                          <div class="custWrapper">
                            <p>הקדשה</p>
                            <select dir="rtl" name="custmize" id="custmizeSelection">
                              <option value="0">לבחירה</option>
                              <option value="0">כן</option>
                              <option value="0">לא</option>
                            </select>
                          </div>
                          <div class="textareaCust">
                            <p >הערות (לא חובה)</p>
                            <textarea name="custumizeText" id="custumizeText" cols="30" rows="10">500
  
                            </textarea>
                          </div>
                          <div class="counterWrapper">
                            <p>כמות</p>
                            <input type="number" dir="rtl" name="" id="">
                          </div>
                        </div>
                      </div>
                  </div>
          `;
        }
        dots();
    };
    const dots = () => {
        let indecatordisplay = document.getElementById("indecator");
        let idCounter = 0;
        for (let item of productArrUrg[prouductToDisplat].imgs) {
            let dot = document.createElement("div");
            dot.setAttribute("class", "dots active");
            dot.setAttribute("id", `${idCounter}imgToDisplay`);
            if (indecatordisplay) {
                indecatordisplay.appendChild(dot);
            }
            let btn = document.getElementById(`${idCounter}imgToDisplay`);
            if (btn) {
                btn.addEventListener("click", (e) => {
                    var _a;
                    imgIdToDisplay = parseInt((_a = e.target) === null || _a === void 0 ? void 0 : _a.id);
                    display();
                });
            }
            idCounter++;
        }
    };
    display();
};
