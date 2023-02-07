interface address {
  city: string;
  street: string;
  buldingNumber: number;
  buldingEntrace?: string;
  phone: string;
  zipCode: number;
  postbox?: number;
}
let userId=0;
export class User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  address: address;
  password: string;
  wishList:number[];
  cart:number[];
  id: number;
  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    address: address,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.address = address;
    this.password = password;
    this.id=this.idGenerator();
    this.wishList=[];
    this.cart=[];
  }
  idGenerator=():number=>{
    if(localStorage.getItem("userId")){
        userId=localStorage.getItem("userId")as unknown as number;
        userId++;
        localStorage.setItem("userId",userId+"");
        return userId
    }else{
        userId++;
        localStorage.setItem("userId",userId+"");
        return userId
    }
  }
  addToCart=(productid:number):void=>{
      this.cart.push(productid)
    
  }
  addToWishList=(productid:number):void=>{
      this.wishList.push(productid)
    
  }
}
