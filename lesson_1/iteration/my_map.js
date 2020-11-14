// My map function

function map(arr, callback, thisArg) {
  let result = [];

  for (let i = 0 ; i < arr.length ; i++) {
    let element = arr[i];
    result.push(callback(element, i , arr, thisArg));
  }

  return result;
}



// ==================================================

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
