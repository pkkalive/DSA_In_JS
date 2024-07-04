function reverse(arr, start, end) {
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start ++;
        end --;
    }
}

function LeftRotateByNtimes(arr, n) {
    const len = arr.length;
    const k = n % len;

    if (k > 0){
        reverse(arr, 0, k - 1);
        reverse(arr, k, len - 1);
        reverse(arr, 0, len - 1);
    }
    return arr;
}

console.log(LeftRotateByNtimes([1, 2, 3, 4, 5, 6, 7], 2));
console.log(LeftRotateByNtimes([3, 4, 5, 6, 7, 1, 2], 2));
