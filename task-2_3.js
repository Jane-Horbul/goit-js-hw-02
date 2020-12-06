function findLongestWord(string = "") {
  let array = string.split(" ");
  let longestWord = array[0].length;
  let nameLongestWorld = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= longestWord) {
      longestWord = array[i].length;
      nameLongestWorld = array[i];
    }
  }
  return nameLongestWorld;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
