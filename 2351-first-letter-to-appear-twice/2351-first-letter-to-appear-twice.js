/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let set = new Set();
    for(let i = 0; i < s.length; i++){
        const ch = s[i];
        if(set.has(ch)){
            return ch;
        }else{
            set.add(ch);
        }
    }
    return "undefined";
};