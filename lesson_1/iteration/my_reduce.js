// Implement the reduce method.

function reduce(arr, callback, accumulator ,thisArg) {
  if (arr.length === 0) return accumulator;
  let index = 0;
  let result;

  if (!accumulator) {
    index = 1; 
    accumulator = arr[0];
  }

  while (index < arr.length) {
    accumulator = callback.call(thisArg, accumulator, arr[index], index, arr);
    index++;
  }

  return accumulator;
}

// ================================

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

