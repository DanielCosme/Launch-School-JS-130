let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

function makeCounterLogger(start) {
  function func(last) {
    let count = 0;
    if (start < last) {
      for (count = start ; count <= last ; count++) {
        console.log(count);
      }
    } else {
      for (count = start ; count >= last ; count--) {
        console.log(count);
      }
    }
    
  }

  return func;
} 
