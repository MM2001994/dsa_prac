/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s.length <= 2) return true;

    let i = 0, j = s.length - 1;

    while(i <= j){
        if(s[i] == s[j]){
            i++;
            j--;
        } else {
            // Found mismatch - check both deletion options
            const lCheck = checkPal(i + 1, j);  // Skip left character
            const rCheck = checkPal(i, j - 1);  // Skip right character

            return lCheck || rCheck;
        } 
    }

    function checkPal(l, r){
        while(l <= r){
            if(s[l] == s[r]){
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }
    
    return true;
};