class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        this.print = print;
    }
}
  
  function print() {
    console.log(this.name);
    console.log(this.number);
  }
  
  var a = new Contact("salma", 123456);
  var b = new Contact("beidou", 654321);
  var c = new Contact("ajax", 000000);
  
  a.print();
  b.print();
  c.print();