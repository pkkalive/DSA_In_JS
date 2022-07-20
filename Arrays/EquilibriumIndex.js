function equilibriumIndex(A){
  const len = A.length;
  const leftPrefixSum = [], rightPrefixSum = [];
  leftPrefixSum[0] = A[0];
  rightPrefixSum[len-1] = A[len-1];

  for (let i = 1; i < len ; i++){
    leftPrefixSum[i] = leftPrefixSum[i-1] + A[i];
  }

  for (let j = len -2; j >= 0; j--){
    rightPrefixSum[j] = rightPrefixSum[j+1] + A[j];
  }

  for (let k = 0; k < len; k++) {
    if (leftPrefixSum[k] === rightPrefixSum[k]) {
      return k;
    }
  }
  return -1;
}

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(equilibriumIndex([1, 2, 3]));