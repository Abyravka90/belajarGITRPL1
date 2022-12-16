function main(){
    var prodID=readLine();
    var price=parseInt(readLine(),10);
    var discount=parseInt(readLine(),10);

    var prodID=new Product(prodID, price);
    console.log(prod1.prodID + " price " + prod1.price);
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price " + prod1.price);
}
function Product(prodID,price){
    this.prodID=prodID;
    this.price=price;

    this.changePrice= function(discount){
    this.price= price - ((discount/100) * price);

    }
}