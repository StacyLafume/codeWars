// eturn the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
const getCount = str => {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
              vowelsCount++
        }
    }
    
    return vowelsCount;
  }
  
  // https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/solutions/javascript
 //Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'