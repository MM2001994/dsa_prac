/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return "";
    strs.sort();
    let n = 0;
     while (n < strs[0].length && n < strs[strs.length - 1].length) {
        if (strs[0].charAt(n) === strs[strs.length - 1].charAt(n)) {
            n++;
        }
        else {
            break;
        }
    }

    return strs[0].substring(0,n);
};