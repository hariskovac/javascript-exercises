const removeFromArray = function(arr, ...args) {
  let newArr = [];

  outer: for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        continue outer;
      }
    }
    newArr.push(arr[i]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
