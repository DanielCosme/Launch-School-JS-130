function createCounter() {
  let counter = 0;

  function func() {
    counter++;
    return counter;
  }

  return func;
}

let counter1 = createCounter();
let counter2 = createCounter();

let a = counter1();
let b = counter1();


console.log(a);
console.log(b);

if (counter1 === counter2) console.log('Equal');
console.log(counter1, counter2);
