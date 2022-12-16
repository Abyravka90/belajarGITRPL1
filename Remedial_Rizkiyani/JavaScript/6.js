function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(){
        console.log(this.name+': '+this.number)
    }
}

var a = new contact("Yaya", 12345);
var b = new contact("Kiya", 87653);
var c = new contact("Aya", 538029);
a.print();
b.print();
c.print();