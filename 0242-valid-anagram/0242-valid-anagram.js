/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // let charCounts = new Map();

    // for (let char of s) {
    //     charCounts.set(char, (charCounts.get(char) || 0) + 1);
    // }

    // for (let char of t) {
    //     if (!charCounts.has(char) || charCounts.get(char) === 0) {
    //         return false;
    //     }
    //     charCounts.set(char, charCounts.get(char) - 1);
    // }

    // return true;

    // let k = s.split('').sort().join('');
    // let l = t.split('').sort().join('');
    // for (let i = 0; i < s.length; i++) {
    //     if (k[i] != l[i]) {
    //         return false;
    //     }
    // }
    // return true;
    let counts = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        let indexS = s.charCodeAt(i) - 97;
        let indexT = t.charCodeAt(i) - 97;

        counts[indexS]++;
        counts[indexT]--;
    }

    for(let count of counts){
        if(count != 0){
            return false;
        }
    }
    return true;
};