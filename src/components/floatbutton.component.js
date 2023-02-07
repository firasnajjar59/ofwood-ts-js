export const floutContactButtonDisplay = (id) => {
    let idDisplay = document.getElementById(id);
    const display = () => {
        if (idDisplay) {
            idDisplay.innerHTML = "";
            idDisplay.innerHTML = `
          <div id="ContactUsPopup" class="fixedContactUsPopup">
          <button id="openBtn" class="btn-popup" dir="rtl">היי, רוצה לדבר?</button>
        </div>
          `;
            let openBtn = document.getElementById("openBtn");
            if (openBtn) {
                openBtn.addEventListener("click", openPopUp);
            }
        }
    };
    const openPopUp = () => {
        const popupElement = document.createElement("div");
        popupElement.setAttribute("class", "popupWrapper");
        popupElement.innerHTML = `
      
      <div class="profileSection">
        <div id="closeBtn"><span class="material-symbols-rounded">
          close
          </span></div>
        <div>
          <div class="profilePopup"></div>
        </div>
      </div>
      <input dir="rtl" placeholder="ההודעה שלך" type="text">
    `;
        let ContactUsPopup = document.getElementById("ContactUsPopup");
        if (ContactUsPopup) {
            ContactUsPopup.appendChild(popupElement);
            ContactUsPopup.style.height = "40em";
        }
        let closeBtn = document.getElementById("closeBtn");
        if (closeBtn) {
            console.log("hi");
            closeBtn.addEventListener("click", closePopUp);
        }
    };
    const closePopUp = () => {
        let ContactUsPopup = document.getElementById("ContactUsPopup");
        if (ContactUsPopup) {
            ContactUsPopup.removeAttribute("style");
        }
        display();
    };
    display();
};
