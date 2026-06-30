/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let minVal = nums[0];
    let maxVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minVal) {
            minVal = nums[i];
        }
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    const newScore = (maxVal - k) - (minVal + k);
    return Math.max(0, newScore);
};