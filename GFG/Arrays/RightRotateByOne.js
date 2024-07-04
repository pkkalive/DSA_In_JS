function RightRotateByOne(arr) {
    const len = arr.length;
    const last = arr[len - 1];
    for (let i = len - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

console.log(RightRotateByOne([1, 2, 3, 4, 5, 6, 7]));
console.log(RightRotateByOne([3, 4, 5, 6, 7, 1, 2]));