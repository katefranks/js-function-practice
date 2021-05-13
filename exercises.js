(function () {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
// function max(num1 , num2) {
//   var result;
//     if  (num1 > num2) {
//       result = num1;
//     } else {
//     return result}
//     }

function max(num1 , num2) {
  var result;
    if  (num1 > num2) {
      result = num1;
    } else {
      result = num2;}
      return result
    }

// alternate solution:
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1 , num2 , num3) {
    var result;
      if  (num1 > num2 && num1 > num3) {
        result = num1;
      } if  (num2 > num1 && num2 > num3) {
        result = num2;
      } if  (num3 > num1 && num3 > num2) {
        result = num3;
      }
        return result
      }

// alternate solution
function maxOfThree(num1 , num2 , num3) {
  return Math.max(num1, num2, num3);
}

// or:


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(s) {
  var result;
  if(s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
    result = true;
  } else {
    result = false;
  }
    return result
}

// alternate solution:
function isVowel(char) {
  return 'aeiou'.includs(char);
}

// or
function isVowel(s) {
  if(s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
    return true;
  } else {
    return false;
  }
}



  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  // function rovarspraket(str) {
  //   for (let i = 0; i <str.length; i++) {
  //     console.log (str.charAt(i));
  //     if (char != "a" || char != "e" || char != "i" || char != "o" || char != "u")
  //   }
  //   var result;
  //   // if (char != "a" || char != "e" || char != "i" || char != "o" || char != "u") {
  //     result = consonant
  //   }
  // }
// loop over string and console log every character

function rovarspraket(text) {
  let translation = '';
  text.toLowerCase().split('').forEach(function(char) {
    if('bcdfghjklmnpqrstvwxyz'.includes(char)) {
      translation += char + 'o' + char;
    } else {
      translation += char;
      // translation = translation + char;
    }
  });
  return translation;
}

// alternate solution

// function rovarspraket(text) {
//   textArray = text.toLowerCase().split('');
//   for  (let i= 0; i < textArray.length; i++) {
//     if ('bcdfghjklmnpqrstvwxyz'.includes(textArray[i])) {
//       textArray[i] = textArray[i] + 'o' + textArray[i];
//     }
//   }
//   return textArray.join('');
// }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  // function sum(numbers1) {
  // 	var total = 0;
  // 	for (var i = 0; i < numbers1.length; i++) {
  // 		total += numbers1[i];
  // 	}
  // 	return total;
  //
  // function multiply(numbers) {
  //     var total = 0;
  //     for (var i = 1; i < numbers.length; i++) {
  //       total *= numbers[i];
  //     }
  //     return total;

function sum(arr) {
//   arr.reduce(function(acc, i))
// }
let total = 0;
for(let i =0; i < arr.length; i++) {
  total += arr[i]
}
  return total;
}

// for multiplication let total = 1, and total *
function multiply(arr) {
  let total = 1;
  for(let i =0; i < arr.length; i++) {
    total *= arr[i]
  }
    return total;
}


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


function reverse(str) {
    var newStr = '';

    for (var i = str.length - 1; i >= 0; i--) {
    	newStr += str[i];
    	continue
    }
    return newStr;
}
// console.log(reverse("Kate"));

// alternate solution
function reverse(str) {
  return str.split('').reverse().join('');
}

// or
function reverse(str) {
let newString = '';
for(let i = 0; i < str.length; i++) {
  newString = str.charAt(i) + newString;}
  return newString;
}
// if you instead wanted to add letting to front of word you wouold decrement i--


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord) {
//         longestWord = strSplit[i].length;
//       }
// }
//   return longestWord;
// }

function findLongestWord(arr) {
  let length = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
    }
  }
  return length;
}


// ***This message is saying "str.split is not a function"

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

// function filerLongWords(str , i) {
//   var str = " ";
//   var i = " ",
// }

function filterLongWords(arr, i) {
    i = i.length;
    filter = [];
    for (var j = 0, j = arr.length; j < length; j++) {
        if(arr[j].length > i) {
            filter.push(arr[j]);
        }
    }
    return filter;
}

// alternate solution
function filterLongWords(arr, i) {

  return arr.filter(function(word){
    return word.length > 1
  });
}

// or

function filterLongWords(arr, i) {
let newArray = [];

for(let j = 0; j < arr.length; j++) {
  if(arr[j].length > i) {
    newArray.push(arr[j]);
  }
}
return newArray;
}
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

function charFreq(str) {
  const freqList = {};

  str.split('').forEach(function(char) {
    freqList[char] = freqList[char] + 1 || 1;
  });
  return freqList;
}

// . notation will specifically target the property of a character. ex- freq.List.char
//  vs freqList[char]

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
