function contact(name,number){
    this.name=name;
    this.number=number;
}
var a= new contact("gentur", 1324);
var b= new contact("tia", 12345);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)
