// Write a function named startCounting that logs a number to the console every second, starting with 1. Each output number should be one greater than the previous one.


function startCounting() {
  let num = 1;
  
  return setInterval(()=> {
    console.log(num);
    num++;
  }, 1000);
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
setTimeout(stopCounting, 2000, id);

