function SecondLargestElement(arr) {
  let firstMax = 0, secondMax = -1;
  for (let i in arr) {
    if (arr[i] > arr[firstMax]) {
      secondMax = firstMax;
      firstMax = i;
    }
    if (arr[i] < arr[firstMax] && (secondMax === -1 || arr[i] > arr[secondMax])) {
        secondMax = i;
    }
  }
  return secondMax === -1 ? -1 : arr[secondMax];
}

console.log(SecondLargestElement([12, 35, 1, 10, 34, 1]));
console.log(SecondLargestElement([10, 5, 10]));
console.log(SecondLargestElement([10, 10, 10]));
