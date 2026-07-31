/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let f = 0;
    let l = s.length - 1;
    const checkPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    while (f < l) {
        if (s[f] === s[l]) {
            f++;
            l--;
        } else {
           return checkPalindrome(s, f + 1, l) || checkPalindrome(s, f, l - 1);
        }
    }

    return true;
};