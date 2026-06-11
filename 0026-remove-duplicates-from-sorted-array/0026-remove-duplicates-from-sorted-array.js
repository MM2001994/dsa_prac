/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let uniqueNumbers = [...new Set(nums)];
    nums.splice(0, nums.length, ...uniqueNumbers);
    return nums.length;
};