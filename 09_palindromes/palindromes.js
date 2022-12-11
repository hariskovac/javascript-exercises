const palindromes = function(str) {
  const newStr = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "");
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
