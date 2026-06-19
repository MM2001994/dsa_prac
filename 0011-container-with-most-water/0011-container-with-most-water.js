/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let length = height.length;

    let max = length-1;
    let min = 0;
    let area = 0;

    for(let i = 0; i<length; i++){
        let width = max - min;
        let currentHeight = Math.min(height[min], height[max]);
        let currentArea = (width * currentHeight);
        area = Math.max(area, currentArea);
        if(height[max] > height[min]){
            min++;
        }else{
            max--;
        }
        
    }
    return area;
};