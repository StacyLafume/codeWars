function stray(numbers) {
// console.log(numbers)
  for(let i=0; i<numbers.length; i++){

  const left=numbers[i]
  const middle=numbers[i+1]
  const right=numbers[i+2]

    if(left==middle){

      if (right!==left){
       return right
      }
    }  else if (left==right){
        return middle

    }else{
        return left
    }

    }
  }

console.log(stray ([8,1,1]))
console.log(stray ([1,1,1,6,1]))
