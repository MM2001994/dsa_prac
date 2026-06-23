/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let freq = {}
    for(let word of text){
        freq[word] = (freq[word] || 0)+ 1
    }
    return Math.min(
        freq['b'] || 0,
        freq['a'] || 0,
        Math.floor(freq['l'] / 2) || 0,
        Math.floor(freq['o'] / 2) || 0,
        freq['n'] || 0,
    )
};