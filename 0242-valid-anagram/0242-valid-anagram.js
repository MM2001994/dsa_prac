/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let charCounts = new Map();

    for (let char of s) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!charCounts.has(char) || charCounts.get(char) === 0) {
            return false;
        }
        charCounts.set(char, charCounts.get(char) - 1);
    }

    return true;
};