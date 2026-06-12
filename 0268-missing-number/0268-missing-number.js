/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let length = nums.length;
    let set = new Set(nums);
    //console.log(set);
    for (let i = 0; i < length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return length;
};
