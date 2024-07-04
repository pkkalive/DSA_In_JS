function LeaderArray(arr) {
    const len = arr.length;
    let maxSoFar = arr[len - 1]
    const res = [maxSoFar];

    for (let i = len - 2; i >= 0; i--) {
        if (arr[i] > maxSoFar){
            res.push(arr[i]);
            maxSoFar = arr[i];
        }
    }
    return res;
}

console.log(LeaderArray([7, 10, 4, 10, 6, 5, 2]));