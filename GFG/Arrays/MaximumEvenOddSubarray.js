function MaximumEvenOddSubarray(arr) {
    let maxLen = 1, curLen = 1;
    for (let i = 1; i < arr.length; i++) {
        if (((arr[i] & 1) === 0 && (arr[i - 1] & 1) === 1) || 
        ((arr[i] & 1) === 1 && (arr[i - 1] & 1) === 0)) {
            curLen++;
            maxLen = Math.max(maxLen, curLen);
        } else {
            curLen = 1;
        }
    }
    return maxLen;
}

console.log(MaximumEvenOddSubarray([5, 10, 6, 3, 8]));