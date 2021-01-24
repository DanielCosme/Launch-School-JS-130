const MyClass = require("./mod");


let foo = new MyClass();
console.log(foo.getNum());
foo.setNum(4);
console.log(foo.getNum());
console.log(foo.foo);

let bar = new MyClass();
console.log(bar.getNum());

