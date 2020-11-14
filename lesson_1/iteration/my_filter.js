// Emulate the filter method.

function filter(arr, callback, thisArg) {
  let result = [];

  for (let i = 0 ; i < arr.length ; i++) {
    let element = arr[i];

    if (callback.call(thisArg, element, i, arr)) {
      result.push(element);
    }
  }

  return result;
}


// ====================================

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
