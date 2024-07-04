function StockBuyAndSell(arr) {
    const len = arr.length;
    let maxProfit = 0;

    for (let i = 1; i < len; i++) {
        if (arr[i] > arr[i - 1]) {
            maxProfit += (arr[i] - arr[i - 1]);
        }
    }
    return maxProfit;
}

console.log(StockBuyAndSell([1, 5, 3, 8, 12]));
console.log(StockBuyAndSell([10, 20, 30, 80, 120]));
console.log(StockBuyAndSell([120, 100, 90, 60]));

