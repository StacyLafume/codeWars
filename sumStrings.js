// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

const sumStrings = (a,b) => String(BigInt(a) + BigInt(b))

console.log("123 + 456 = ",sumStrings('123','456')) //'579'
console.log("1 + 3 = ",sumStrings('1','2')) // => '3'