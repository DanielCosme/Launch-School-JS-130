let foo = 2;

class MyClass {
   constructor() {
      this.num = foo;
   }

   getNum() {
      return foo;
   }

   setNum(arg) {
      foo = arg; 
   }
}

module.exports = MyClass;


