// Rewrite using classic JavaScipt syntax
/*
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);
*/

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2 , 3);
let baz = obj.baz;
let bar = obj.bar;
let qux = obj.qux;

