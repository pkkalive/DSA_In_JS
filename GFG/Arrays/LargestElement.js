function LargestElement(arr) {
    let max = arr[0];
    for (const num of arr) {
        if (num > max) max = num;
    }
    return max
}

console.log(LargestElement([5, 8, 20, 15]));
console.log(LargestElement([10, 324, 45, 90, 9808]));