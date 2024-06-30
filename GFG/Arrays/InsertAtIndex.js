function InsertAtIndex(arr, index, element) {
    const sizeOfArray = arr.length;
    for (let i = sizeOfArray; i > index; i--){
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
    return arr;
}

console.log(InsertAtIndex([1, 2, 3, 4, 5], 2, 90));
console.log(InsertAtIndex([1, 2, 3, 4, 5], 5, 90));
console.log(InsertAtIndex([], 0 , 20));
console.log(InsertAtIndex([12, 32, 2, 87, 22, 19, 30], 8, 59));
