/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim();
    words = words.split(' ');
    // console.log(words)
    return words[(words.length)-1].length;
};