/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
const maxBuilding = function(n, restrictions) {
    restrictions.push([1, 0]);
    restrictions.push([n, n - 1]);
    
    restrictions.sort((a, b) => a[0] - b[0]);
    
    const m = restrictions.length;
    
    for (let i = 1; i < m; i++) {
        const [id1, h1] = restrictions[i - 1];
        const [id2, h2] = restrictions[i];
        restrictions[i][1] = Math.min(h2, h1 + (id2 - id1));
    }
    
    for (let i = m - 2; i >= 0; i--) {
        const [id1, h1] = restrictions[i];
        const [id2, h2] = restrictions[i + 1];
        restrictions[i][1] = Math.min(h1, h2 + (id2 - id1));
    }
    
    let maxHeight = 0;
    for (let i = 1; i < m; i++) {
        const [id1, h1] = restrictions[i - 1];
        const [id2, h2] = restrictions[i];
        
        const distance = id2 - id1;
        const peak = Math.floor((h1 + h2 + distance) / 2);
        maxHeight = Math.max(maxHeight, peak);
    }
    
    return maxHeight;
};