// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
// In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var product
  var sum
  var root
  var div
  let deathOfGranny = [age1,age2,age3,age4,age5,age6,age7,age8]
  product = deathOfGranny.map(x => x * x)
  sum = product.reduce((a,b)=>a+b)
  root = Math.sqrt(sum)
  div = root/2
  let finalAge = Math.floor(div)
  return finalAge
  }
