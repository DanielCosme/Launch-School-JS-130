// Rewrite using classic JavaScipt syntax

/* 
function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let [ bar, qux, baz ] = result;
*/


function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

console.log(result);
