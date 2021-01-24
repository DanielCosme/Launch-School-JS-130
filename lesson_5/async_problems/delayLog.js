function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();
console.log("====================");

function del() {
  for (var delay = 1; delay <= 10; delay += 1) {
    console.log(delay);
  }
}

del();
