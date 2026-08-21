/**
 
@param {string} s
@return {number}*/
var lengthOfLongestSubstring = function(s) {
    const chIndex = new Map();
    let l = 0; 
    let maxLength = 0;

    for(let r = 0; r < s.length; r++){
        const char = s[r];

        if(chIndex.has(char) && chIndex.get(char) >= l){
            l = chIndex.get(char) + 1;
        }

        chIndex.set(char, r);
        maxLength = Math.max(maxLength, r-l+1);
    }
    return maxLength;
};