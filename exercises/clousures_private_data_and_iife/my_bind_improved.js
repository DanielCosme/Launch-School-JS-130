'use strict';

function myBind(func, context, ...args) {
  return function(...args2) { 
    return func.apply(context, [...args, ...args2]); 
  }
}

function addNumbers(a, b) {
  let res = a + b;
  console.log(res);
  return res;
}

let addFive = myBind(addNumbers, null, 5);
let add = addFive(10);
console.log(add); // 15
