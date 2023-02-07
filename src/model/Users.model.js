let userId = 0;
export class User {
    constructor(firstName, lastName, userName, email, address, password) {
        this.idGenerator = () => {
            if (localStorage.getItem("userId")) {
                userId = localStorage.getItem("userId");
                userId++;
                localStorage.setItem("userId", userId + "");
                return userId;
            }
            else {
                userId++;
                localStorage.setItem("userId", userId + "");
                return userId;
            }
        };
        this.addToCart = (productid) => {
            this.cart.push(productid);
        };
        this.addToWishList = (productid) => {
            this.wishList.push(productid);
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.address = address;
        this.password = password;
        this.id = this.idGenerator();
        this.wishList = [];
        this.cart = [];
    }
}
