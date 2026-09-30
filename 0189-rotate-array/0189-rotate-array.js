/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let size = nums.length;
    if(k>size){
        k = k % size;
    }
    reverseArray(nums,0,size-1);
    reverseArray(nums,0,k-1);
    reverseArray(nums,k,size-1);
    return nums
};

function reverseArray(arr,start,end){
    while(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++;
        end--;
    }
}