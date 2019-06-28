// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
//
// In effect: 89 = 8^1 + 9^2
//
// The next number in having this property is 135.
//
// See this property again: 135 = 1^1 + 3^2 + 5^3
//
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
// Let's see some cases:
//
// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.
//
// sumDigPow(90, 100) == []


unction helper(num1){
let x = num1.toString()
let sum = 0
// MAP IS A LOOP THAT RETURNS AN ARRAY
let y = x.split("")
// console.log(y)
  for(var index=0;index<y.length;index++){
    var digit= parseInt(y[index])
    var power = index+1;
    // RAISING EACH ELEMENT TO IS RESPECTIVE POWER
    // console.log(Math.pow(digit, power), power, index, y[index])
    sum +=  Math.pow(digit, power)
  }
  if(sum===num1){
    // console.log("this number does work",num1,sum)

    return sum;
  }else{
    // console.log("This number doesnot work",num1,sum)
  }
}

helper(89)
helper(90)

function sumDigPow(a , b){
  var array = []
  for (var i = a; i<=b; i++) {
    array.push(i)
  }

  // array: filled with numbers from a,b
  answer=[]
 for(let i=0; i<array.length;i++){
   var number = array[i]
   if (helper(number) == number){
     answer.push(number)
   }
 }
 return answer
}
sumDigPow(1, 100)
