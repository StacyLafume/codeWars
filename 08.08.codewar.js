// We'll create a function that takes in two parameters:
// a sequence (length and types of items are irrelevant)
// a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.
// If the function given returns false for all members of the sequence, your function should return -1.

var findInArray = function(array, iterator) {
  var result = -1
  for (var i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      result = i
      break
    } else {
      result = -1
    }
  }
  return result
};

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.
//It should look like this:
//Sam Harris => S.H
//Patrick Feeney => P.F

function convertName (name){
  let arr= name.split(' ') 
  let firstIn = arr[0][0] 
  let lastIn = arr[1][0] 
  return (firstIn+"."+lastIn).toUpperCase()
}
