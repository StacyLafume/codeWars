// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.


function minValue(values){
    const uniqueDigits = [... new Set(values)];
    const stringResult = uniqueDigits.sort((a,b)=> a -b).join('')
    return +stringResult
  }