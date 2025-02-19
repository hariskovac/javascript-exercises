const sumAll = function(num1, num2) {
  let sum = 0;
  let start = num1;
  let end = num2;

  if (num1 > num2) {
    start = num2;
    end = num1;
  } else if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
