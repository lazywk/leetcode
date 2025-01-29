/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] - target >= 1) {
      return j;
    } else {
      j++;
    }
  }

  return j;
};

console.log(searchInsert([1, 3, 5, 6], 2));
