// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

const  createHashMap = array => {
    const hashMap = {};
    for(let element of array){
        hashMap[element] ? hashMap[element]++ : hashMap[element] =1
    }
  return hashMap
}

const repeats = array => {
  let result = 0
   const hashMapOfArray = createHashMap(array)
   for (let number in hashMapOfArray){
     if(hashMapOfArray[number]<2){
      result += +number
     }
   }
  return result;
   
 };