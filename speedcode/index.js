// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
//
// E.g.
//
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

function arrayMadness(a, b) {
  // Ready, get set, GO!!!

  console.log("first array: ", a, "second array: ", b)

  //array to hold the powerd elements
  let arrayA = []

  let arrayB = []

  //total sum of the array
  let sumA = 0

  let sumB = 0

  //loop to push into the arrayA and arrayB
  for(let i = 0; i < a.length; i++){

    arrayA.push(Math.pow(a[i], 2))

    console.log("array a: ", arrayA)

  }

  for(let i = 0; i < b.length; i++){

    arrayB.push(Math.pow(b[i], 3))

    console.log("array b: ", arrayB)

  }

  //loop to add into sumA and sumB
  for(let i = 0; i < arrayA.length; i++){

     sumA = arrayA[i] + sumA

     console.log("total a: ", sumA)

  }

   for(let i = 0; i < arrayB.length; i++){

     sumB = arrayB[i] + sumB

     console.log("total b: ", sumB)

  }

  //compare sumA and sumB
  if( sumA > sumB){

    return true

  } else{

    return false

  }


}
