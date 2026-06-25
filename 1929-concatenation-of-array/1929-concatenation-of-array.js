/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArray = [...nums, ...nums];
    return newArray;
};