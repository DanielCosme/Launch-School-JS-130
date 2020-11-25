function delayLog(d) {
  function log(str) { console.log(str) }

  for (var delay = 1 ; delay <= d ; delay++) {
    setTimeout(log, delay * 1000,  delay);
  }  
}

delayLog(10);