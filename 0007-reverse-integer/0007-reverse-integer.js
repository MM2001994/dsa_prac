/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = - (2 ** 31);
    const max = (2 ** 31 -1);

    let nums = Math.abs(x);
    let rev = 0;

    let sign = x < 0 ? -1 : 1;

    while(nums !== 0){
        let digit = nums % 10;
        nums = Math.trunc(nums/10);
        rev = rev * 10 + digit;
    }

    rev *= sign;

    if(rev < min || rev > max){
        return 0;
    }
    return rev;
};