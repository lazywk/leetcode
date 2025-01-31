/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};

    for (const i of s) {
        map[i] = (map[i] || 0) + 1;
    }

    for (const j of s) {
        if (map[j] === 1) {
            return s.indexOf(j);
        }
    }

    return -1;
};

console.log(firstUniqChar("loveleetcode"));
