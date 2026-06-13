/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanText = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanText);
    let i = 0;
    let j = cleanText.length - 1;

    let isPalindrome = true;
    while(i<j){
        if(cleanText[i] !== cleanText[j]){
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;   
};