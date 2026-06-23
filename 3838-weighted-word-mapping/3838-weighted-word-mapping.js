/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let result = "";
    for (let word of words) {
        let sum = 0;
        for (let ch of word) {
            let index = ch.charCodeAt(0) - 97;
            sum = sum + weights[index];
        }

        let mod = sum % 26;
        let mappedArray = String.fromCharCode(122-mod);
        result += mappedArray
    }

    return result;
};