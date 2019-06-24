
// I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(4);
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr
}
