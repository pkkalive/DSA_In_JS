function LeftRotateByOne(arr) {
    const len = arr.length;
    const val = arr[0];
    for (let i = 0; i < len - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[len - 1] = val;
    return arr;
}

console.log(LeftRotateByOne([1, 2, 3, 4, 5, 6, 7]));
console.log(LeftRotateByOne([3, 4, 5, 6, 7, 1, 2]));