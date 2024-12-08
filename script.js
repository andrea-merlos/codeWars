// Problem 1
// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
  // my solution was adding the toUpperCase
}
// *************************************************************************
// Problem 2
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map(function (x) {
    return x * 2;
  });
}
// Used the map method to create a new array by multiplying each element by 2
// For each element in the array, multiply it by 2 and return the result

// *************************************************************************
// Problem 3
// Step 1: Filter positive and negative numbers
//  Count positive numbers
// Sum negative numbers
// Return the result
function countPositiveNegatives(input) {
  const positiveNumbers = input.filter((number) => number > 0);
  const negativeNumbers = input.filter((number) => number < 0);
  const positiveNumbersResults = positiveNumbers.length;
  let sum = 0;
  negativeNumbers.forEach(function (number) {
    sum = sum + number;
  });
  return [positiveNumbers, sum];
}
// Filter positive numbers from the input array
// Filter negative numbers from the input array
// Get the count of positive numbers
// Initialize sum for negative numbers
// Iterate through negative numbers and calculate the sum
// Return the array of positive numbers and the sum of negative numbers

// *************************************************************************
// Problem 4
// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  i * 2;
  return i;
}
// Return the result of multiplying the input by 2 (this will be the function's output)
// *************************************************************************
// Problem 5
// Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
// outtput should  be "found the needle at position 5"

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") return "found the needle at position " + i;
  }
}
console.log(findNeedle(haystack));
// this was my favorite codewar problem
// *************************************************************************
// Problem 6
//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map(function (i) {
      return parseInt(i);
    });
}
// *************************************************************************
// Problem 7
//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation) {
  return employed && !vacation;
}
// Logical AND: employed must be true AND vacation must be false
// Return true only if the person is employed AND not on vacation
// *************************************************************************
// Problem 8
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// a can contain numbers or strings. x can be either.
//Return true if the array contains the value, false if not.

function check(a, x) {
  // Check if the value x is included in the array a
  return a.includes(x);
}
// Returns true if x is in a, otherwise false
// *************************************************************************
// Thank You for chercking my work :)
