let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function odd(val) {
  return !(val % 2 === 0);
}

function even(val) {
  return val % 2 === 0;
}

function filter(arr, callback) {
  function red(acc, cur) {
    if(callback(cur)) {
      acc.push(cur);
    }

    return acc;
  }

  return arr.reduce(red, [])
}

// console.log(filter(arr, odd));
// console.log(filter(arr, even));

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
