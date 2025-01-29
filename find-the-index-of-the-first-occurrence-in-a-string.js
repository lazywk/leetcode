/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let substr = ''
    for (const i of haystack) {
        substr += i;
        if (substr.length === needle.length && substr.slice(-needle.length) === needle) {
            return haystack.indexOf(needle) 
        } else if (substr.length >= needle.length) {
            substr = substr.slice(1)
        }
    }

    return -1
};

console.log(strStr("sadbutsad", "sad"));
