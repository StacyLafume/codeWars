/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */

//https://www.codewars.com/kata/5901f361927288d961000013/train/javascript
function product(values) {
    if(!Array.isArray(values) || values.length === 0) return null;
    return values.reduce((product,number)=> product * number)
    
  }