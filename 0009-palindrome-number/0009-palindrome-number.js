/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = 0;
    let originalNum = x;
    if(x<0){
        return false;
    }
    while(x !== 0){
        let digit = x % 10;
        x = Math.trunc(x/10);
        rev = rev * 10 + digit;
    }
    
    if(rev === originalNum){
        return true;
    }
    return false;
};