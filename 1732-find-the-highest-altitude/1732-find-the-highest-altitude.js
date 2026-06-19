/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let output = [max];
    let length = gain.length;
    for(let i= 0; i<length; i++){
        max = max + gain[i];
        output.push(max);
    }
    return Math.max(...output);
};