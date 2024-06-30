function MoveZeros(arr) {
    let zeroId = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[zeroId]] = [arr[zeroId], arr[i]];
            zeroId++;
        }   
    }
    return arr;
}

console.log(MoveZeros([1, 2, 0, 0, 0, 3, 6]));
console.log(MoveZeros([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));