/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = false;
  if (typeof str === 'string'){
     isPalindrome = true;
     const strArr = str.toLowerCase().split('').filter(x => /[a-z]/.test(x));
   let i = 0, j = strArr.length-1
    while(i<j){
      if(strArr[i] !== strArr[j]){
        isPalindrome = false;
        break;
      }
      i++;
      j--;
    }
  }
  return isPalindrome;
}

module.exports = isPalindrome;
