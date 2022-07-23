function pickBothSides(A, B){
  const len = A.length;
  const prefixSum = [];
  const suffixSum = [];
  let maxSum = 0, currentSum = 0;
  prefixSum[0] = A[0];
  suffixSum[len - 1] = A[len - 1];


  for (let i = 1; i < B; i++){
    prefixSum[i] = prefixSum[i - 1] + A[i];
  }

  for (let j = len - 2; j >= len - B; j--){
    suffixSum[j] = suffixSum[j + 1] + A[j];
  }

  maxSum = prefixSum[B-1];
  maxSum = Math.max(maxSum, suffixSum[len - B]);

  for (let k = 1; k < B; k++){
    currentSum = suffixSum[len - (B - k)] + prefixSum[k - 1];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(pickBothSides([25, -2, 3 , 10, 2], 3));