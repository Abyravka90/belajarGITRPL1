function contact(name, number){
    this.name = name;
    this.number = number;
    this.print = print;
}
function print(){
    console.log(this.name+this.number)
}
var a = new contact("abal", 2000);
var b = new contact("abul", 1000);
var c = new contact("anti", 3000);
a.print()
b.print()
c.print()
