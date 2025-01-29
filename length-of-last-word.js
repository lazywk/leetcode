/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let substr = "";
  let isCleared = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      substr += s[i];
      isCleared = false;
    } else {
      if (!isCleared) {
        substr = "";
        isEmpty = true;
      }
    }
  }

  return substr.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
