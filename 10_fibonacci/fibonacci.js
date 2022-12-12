const fibonacci = function(member) {
  const place = parseInt(member);
  if (place < 0) {
    return "OOPS";
  } else {
    let fibArr = [0, 1];
    for (let i = 1; i < place; i++) {
      fibArr.push(fibArr[i-1] + fibArr[i]);
      console.log(fibArr);
    }
    return fibArr[fibArr.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
