/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lo = 0, hi = numbers.length-1;
    while(lo<hi){
        let currentSum = numbers[lo] + numbers[hi];
        if(currentSum === target){
            return [lo+1,hi+1];
        }else if(currentSum < target){
            lo++;
        }else{
            hi--;
        }
    }
}