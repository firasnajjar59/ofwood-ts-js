let currentId = 0;
export class Prouduct {
    constructor(title, description, price, categore, color, imgs, ribbon) {
        this.idGenerator = () => {
            if (localStorage.getItem("currentId")) {
                currentId = localStorage.getItem("currentId");
                currentId++;
                localStorage.setItem("currentId", currentId + "");
                return currentId;
            }
            else {
                currentId++;
                localStorage.setItem("currentId", currentId + "");
                return currentId;
            }
        };
        this.title = title;
        this.description = description;
        this.price = price;
        this.categore = categore;
        this.color = color;
        this.imgs = imgs;
        this.id = this.idGenerator();
        this.ribbon = ribbon;
    }
}
