/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const duplicate = nums[i];
        if (set.has(duplicate)) {
            return true;
        } else {
            set.add(duplicate);
        }
    }
    return false;
};