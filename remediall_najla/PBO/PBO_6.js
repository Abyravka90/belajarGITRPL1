function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("Najla", 17263163);
var b = new contact("Ajaa", 253129836);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)