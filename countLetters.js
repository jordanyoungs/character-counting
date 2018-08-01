function countLetters(string) {
  newString = string.split(" ").join("").toLowerCase();
  charArray = newString.split("");

  var charCount = {};
  charArray.forEach( function(char){
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  });
  return charCount;
}