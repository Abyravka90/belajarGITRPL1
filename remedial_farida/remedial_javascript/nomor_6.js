function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("fara", 12345);
var b = new contact("rida", 987654321);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)