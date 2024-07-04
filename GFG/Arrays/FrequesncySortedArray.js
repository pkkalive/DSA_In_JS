function FrequesncySortedArray(arr) {
    const len = arr.length;
    let i = 0;
    while (i < len) {
        let j = i + 1, freq = 1;
        while (j < len) {
            if (arr[i] === arr[j]) {
                j++;
                freq++;
            } else {
                break;
            }
        }
        console.log(`${arr[i]} : ${freq}`);
        i = j;
    }
}

FrequesncySortedArray([10, 10, 10, 20, 30, 30]);