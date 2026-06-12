/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [...nums1, ...nums2]
    nums.sort((a, b) => a - b);
    let median = 0;
    if (nums.length % 2 === 0) {

        median = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    } else {
        median = nums[Math.floor(nums.length / 2)];

    }
    return median;
};