function contact (name,number){
    this.name = name;
    this.number = number ;
    this.print = print ;
}
function print(){
    console.log(this.name+this.number)
}
var a = new contact("udin", 0999)
var b = new contact("udan", 0899)
var c = new contact("uden", 0979)
a.print()
b.print()
c.print()