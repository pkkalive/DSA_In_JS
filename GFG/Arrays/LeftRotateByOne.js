function LeftRotateByOne(arr) {
    let val = arr[0];
    let i = 0;
    for (; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[i] = val;
    return arr;
}

console.log(LeftRotateByOne([1, 2, 3, 4, 5, 6, 7]));
console.log(LeftRotateByOne([3, 4, 5, 6, 7, 1, 2]));