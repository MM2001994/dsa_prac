/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let first = 0;
    let last = people.length - 1;
    let boats = 0;
    while (first <= last) {
        if (people[first] + people[last] <= limit) {
            first++;
            last--;
        } else {
            last--;
        }
        boats++;
    }
    return boats;
};