/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let first = -1;
    let second = -1;

    for(let i = 0; i < s.length; i++){
        const char = s[i];
        if(char >= '0' && char <='9'){
            const val = Number(char);

            if(val > first){
                second = first;
                first = val;
            }else if(val > second && val < first){
                second = val;
            }
        }
    }
    return second;
};