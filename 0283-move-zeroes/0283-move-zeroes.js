/**
 * Moves all zeroes to the end of the array while maintaining the relative order of the non-zero elements.
 * * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let nonZeroPointer = 0; // Tracks where the next non-zero should go
    
    for (let current = 0; current < nums.length; current++) {
        // When we find a non-zero element...
        if (nums[current] !== 0) {
            // ...and it's not already in the correct spot, move it.
            if (nonZeroPointer !== current) {
                nums[nonZeroPointer] = nums[current];
                nums[current] = 0;
            }
            // Move our non-zero target index forward
            nonZeroPointer++;
        }
    }
};