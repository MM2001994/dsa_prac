/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let unique = new Set(nums);

    if(unique.size !== nums.length){
        return true;
    }
    return false;
};