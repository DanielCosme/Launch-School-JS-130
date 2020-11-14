// Implement the forEach method.

class Head {
  constructor(prefix) {
    this.prefix = prefix;
  }

  show(item) {
    console.log(this.prefix, item);
  }
}

function forEach(array, callback, context) {
  for (let index = 0 ; index < array.length ; index++) {
    let value = array[index];
    callback.call(context, value, index, array);
  }
}

// ==============================================

let arr = [1, 2, 3, 4];

let pre = new Head('Item: ');

arr.forEach(val => pre.show(val), pre);
console.log('========================');
forEach(arr, val => pre.show(val), pre);
forEach(arr, val => console.log(val * val));
