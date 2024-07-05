function MaximumConsecutiveOnes(arr) {
    let maxOnes = 0, curMaxOnes = 0;
    for (let num of arr) {
        if (num === 1) {
            curMaxOnes++;
            maxOnes = Math.max(curMaxOnes, maxOnes);
        } else {
            curMaxOnes = 0;
        }
    }
    return maxOnes;
}

console.log(MaximumConsecutiveOnes([0, 1, 1, 0, 1, 0]));
console.log(MaximumConsecutiveOnes([1, 1, 1, 1, 1]));
console.log(MaximumConsecutiveOnes([0, 0, 0, 0, 0]));
console.log(MaximumConsecutiveOnes([1, 0, 1, 1, 1, 1, 0, 1, 1]));
