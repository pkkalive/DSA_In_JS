function MaximumSubarraySum(arr) {
    let maxSum = -Infinity;
    let curSum = 0;
    for (let num of arr) {
        curSum += num;
        maxSum = Math.max(maxSum, curSum);
        if (curSum < 0) {
            curSum = 0;
        }
    }
    return maxSum;
}

console.log(MaximumSubarraySum([1, -2, 3, -1]));
console.log(MaximumSubarraySum([-1, -2, -3, -1, -8, -10]));
console.log(MaximumSubarraySum([1, -2, 3, 1, 8, 10, 12, 3, 5, -8, -10, -100]));