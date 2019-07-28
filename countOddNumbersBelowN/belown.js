// Given a number n, return the number of positive odd numbers below n, EASY!
//
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]


//MY CODE WORKS BUT CODE WARS WASNT REBDERING SO I TRIED  A DIFFERENT WAY
// function oddCount(n){
//   let oddCount = 0;
//   for(let o = n-1; o >= 1; o--){
//     if(o % 2 !== 0 ){
//     oddCount++
//     console.log(o)
//     }
//   }
//   return oddCount
// }

function oddCount(n){
 return Math.floor(n/2);
}
