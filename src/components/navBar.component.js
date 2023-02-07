export const displayNavBar = (id) => {
    let idDisplay = document.getElementById(id);
    if (idDisplay) {
        idDisplay.setAttribute("class", "headerWrapper w-100");
        idDisplay.innerHTML = `
        <div class="logoAndMemberSection mt-3">
        <div class="memberSection ">
            <span class="material-symbols-rounded"> shopping_cart </span>
            <span class="material-symbols-rounded"> login </span>
            <span class="material-symbols-rounded"> account_circle </span>
          <span class="material-symbols-rounded"> favorite </span>
        </div>

        <div class="logoWrapper">
          <img class="" src="./assets/imgs/logo/OriginalonTransparent.png" alt="" />
        </div>
        <span class="material-symbols-rounded hamburger">
            menu
            </span>
      </div>
      <hr>
      <div class="navBarWrapper ">
        <div class="searchWrapper d-flex justify-content-center">
            <input placeholder="search" type="search" name="" id="searchInp">
            <button>
                <span class="material-symbols-rounded">
            search
            </span>
        </button>
        <div id="searchDisplay" class="search-display hidden">
        <div>
        <p>firas</p>
        <hr>
        </div>
      </div>
    </div>
    <div class="navLinks">

        <span><a href="./index.html">הבית</a></span>
        <span><a href="./store.html">חנות</a></span>
        <span><a href="#">השרותים שלנו</a></span>
        <span><a href="./gallary.html">גלריה</a></span>
        <span><a href="#">צור קשר</a></span>
    </div>
      </div>
        `;
    }
    let searchInp = document.getElementById("searchInp");
    let searchDisplay = document.getElementById("searchDisplay");
    const searchForProducts = () => {
        if (searchInp && searchInp.value && searchDisplay) {
            let json = localStorage.getItem("productArr");
            if (json) {
                let productArr = JSON.parse(json);
                let filterArr = productArr.filter(item => item.title.includes(searchInp.value) || item.categore.includes(searchInp.value));
                let searchResult = document.createElement("div");
                for (let item of filterArr) {
                    searchResult.innerHTML += `
            <p><a id="btn${item.id}" href="#">${item.title}</a></p>
           <hr>
            `;
                }
                if (filterArr) {
                    searchDisplay.classList.remove("hidden");
                    searchDisplay.innerHTML = "";
                    searchDisplay.appendChild(searchResult);
                }
                for (let item of filterArr) {
                    let btn = document.getElementById(`btn${item.id}`);
                    if (btn) {
                        btn.addEventListener("click", () => {
                            localStorage.setItem("productId", `${item.id}`);
                            searchInp.value = "";
                            location.assign('./productList.html');
                        });
                    }
                }
            }
        }
        else {
            if (searchDisplay) {
                searchDisplay.classList.add("hidden");
            }
        }
    };
    if (searchInp) {
        searchInp.addEventListener("input", () => {
            searchForProducts();
        });
    }
};
