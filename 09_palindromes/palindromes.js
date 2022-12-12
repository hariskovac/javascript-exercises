const palindromes = function(str) {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, "")
  const reversedStr = newStr
    .split("")
    .reverse()
    .join("");
  if (newStr.toLowerCase() === reversedStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
