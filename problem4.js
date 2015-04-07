/*
Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

var problem4 = function() {

  var isPalindrome = function(num) {
    var str = num.toString();
    var reversedStr = '';
    for(var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    if(reversedStr == str) {
      return true;
    }
    return false;
  };

  var palindrome = 0;
  var number = 100;

  while(number < 1000) {
    for(var i = 100; i < 1000; i++) {
      var multiplication = number * i;
      if(isPalindrome(multiplication)) {
        palindrome = multiplication;
      }
    }
    number += 1;
  }
  
  return palindrome;
};

