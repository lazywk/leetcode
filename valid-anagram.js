var isAnagram = function (s, t) {
  let map = {};
  let anagram = s.length === t.length;

  for (const i of s) {
    map[i] = (map[i] || 0) + 1;
  }
  for (const j of t) {
    if (map[j] > 0) {
      map[j] -= 1;
    } else {
      anagram = false;
    }
  }
  return anagram;
};

console.log(isAnagram("aacc", "ccac"));
