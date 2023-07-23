function printNumbers(start, end) {
    var current = start;
  
    var intervalId = setInterval(function() {
      console.log(current);
      if (current === end) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }
  printNumbers(1, 5);