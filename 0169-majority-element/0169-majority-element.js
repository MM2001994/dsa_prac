/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countt = 0;
    let c = null;
    for(let num of nums)
    {
        if(countt === 0){
            c = num;
        }

        if(num === c)
        {
            countt++;
        }else{
            countt--;
        }
    }
    return c;
};