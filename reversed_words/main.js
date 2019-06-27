// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  // Go for it
    let sentence = []
    let words = str.split(" ")
    for(let i=0; i< words.length; i++){
      console.log(words[i]);
      let letters= words[i].split("")
      letters.reverse()
      let newWord= letters.join("")
      console.log(newWord)
      sentence.push(newWord)
    }
    let finishSentence=sentence.join(" ")
    console.log(str)
    return finishSentence
}
