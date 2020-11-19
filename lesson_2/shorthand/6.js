// Rewrite using classic JavaScipt syntax

/*
 function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
*/

function product() {
  return [].reduce.call(arguments, (total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);

