function MaximumIndexDiff(arr) {
    const len = arr.length;
    let leftMin = [arr[0]];
    let maxIndexDiff = Number.MIN_VALUE;
    for (let i = 1; i < len; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], arr[i]);
    }
    let i = len - 1, j = len - 1;
    while (i >= 0  && j >= 0) {
        if (arr[j] >= leftMin[i]){
            maxIndexDiff = Math.max(maxIndexDiff, j - i);
            i--;
        } else {
            j--;
        }
    }
    return maxIndexDiff;
}

console.log(MaximumIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1]));