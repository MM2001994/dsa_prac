/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const splitS = s.split(" ");
    const stack = [];

    for(let i of splitS){
        stack.push(i);
    }
    let finalS = "";
    while(stack.length){
        const word = stack.pop();
        if(word){
            finalS += " " + word;
        }
    }
    return finalS.trim();
};