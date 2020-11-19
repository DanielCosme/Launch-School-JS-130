// rewrite using classic JavaScipt syntax
/*
function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}
*/

function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
