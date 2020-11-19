// Write a function named makeMultipleLister that you can call with a number as
// an argument. The function should return a new function that, when invoked,
// logs every positive integer multiple of that number less than 100. It should
// work like this:




let lister = makeMultipleLister(17);
lister();

function makeMultipleLister(mult) {
  const LIMIT = 100;

  function func() {
    let multiples = [];

    for (let i = mult ; i < LIMIT ; i += mult) {
      console.log(i);
    }
  }

  return func;
}
