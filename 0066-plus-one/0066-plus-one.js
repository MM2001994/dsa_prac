/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const number = BigInt(digits.join('')) + 1n;


    return Array.from(String(number), Number);
};