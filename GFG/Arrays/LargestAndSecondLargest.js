function LargestAndSecondLargest(arr) {
    let max = arr[0], secondMax = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            secondMax = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return [max, secondMax];
}

console.log(LargestAndSecondLargest([1, 2, 3, 4, 5]));
console.log(LargestAndSecondLargest([2, 1, 2]));
console.log(LargestAndSecondLargest([10, 10, 10, 10, 10]));

