/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const string = 'aeiouAEIOU'
    const vowels = string.split('')
    const strArr = str.split("")
    let vowelCount = 0;
    strArr.forEach(ele => {
      vowels.includes(ele) ? vowelCount++ : '';
    }); 
    return vowelCount;
}

module.exports = countVowels;