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

// const fibonacci = function(count) {
//   if (count < 0) return "OOPS";
//   if (count === 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = b + a;
//     a = temp;
//   }
//   return b;
// };

// Do not edit below this line
module.exports = fibonacci;
