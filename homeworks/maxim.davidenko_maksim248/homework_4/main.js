let someWords = ["first", "Marlin Monroe", "third", "fourth", "Masters academy"];
let searchLetters = function (someWords) { 
  return someWords.map(function (letters) {
    let findM = letters.match(/m/gi),
        findA = letters.match(/a/gi);
  if(!findM && !findA) {
    return 1;
  } else if(findM && findA && findM.length === findA.length) { 
    return 1;
  } else {
    return 0;
  }
})};
console.log(searchLetters(someWords));




