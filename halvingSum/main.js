

//Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + .... All divisions are integer.




function halvingSum(n) {
   let score=0;
  //while n is greater than 1 do whats in the loop
   while (n>=1){
   //add n to its first value and divied value
   score+=n;
   //round down divid n by 2
   n=Math.floor(n/2);
   }
   return score
}



// function halvingSum(n) {

// console.log("this is n", n)

// let math = n + n/2 + n/4 + n/8

// let other = n + n/2 + n/4 + n/8 + n/16

// if(n<=25){

// return Math.ceil(math)

// }else{


// }return Math.ceil(other)



// console.log("math",Math.ceil(math))

// //return Math.ceil(math) && Math.ceil(other)

// }

// for(let i = n; i<1; )
