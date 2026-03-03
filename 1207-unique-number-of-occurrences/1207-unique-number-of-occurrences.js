/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }
    const occ = new Set();
    map.forEach((val,key)=>{
        occ.add(val);
    })
    if(occ.size==map.size)return true;
    return false;
};