function Contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

function print() {
  console.log(this.name);
  console.log(this.number);
}

var a = new Contact("budi", 085673745437);
var b = new Contact("romi", 087583959848);
var c = new Contact("alwi", 084794967439);

a.print();
b.print();
c.print();
