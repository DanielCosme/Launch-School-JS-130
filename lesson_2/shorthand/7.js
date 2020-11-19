// Write a function that takes 5 string arguments and returns an object with
// 3 properties.

function optional(first, ...args) {
  return { 
    first, 
    last: args.splice(args.length -1 , 1)[0],
    middle: args,
  }
}

let {first, last, middle} = optional(1, 2, 3, 4, 5);
// console.log(first);
// console.log(last);
// console.log(middle);

console.log(module.path);
console.log(exports);
// console.log(require);
console.log(__dirname === module.path);
console.log(__filename);
