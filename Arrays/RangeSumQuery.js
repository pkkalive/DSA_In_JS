function rangeSumQuery(A, B){
  const len = A.length;
  const qLen = B.length;
  const prefixSum = [];
  const result = [];
  for(let i = 0; i <= len ; i++){
    prefixSum.push(0n);
  }
  prefixSum[0] = A[0];

  for (let i = 0; i < len; i++){
    prefixSum[i+1] = prefixSum[i];
    prefixSum[i+1] = prefixSum[i+1] + A[i];
  }

  for (let j = 0; j < qLen; j++){
    let querySum = 0;
    let start = B[j][0];
    let end = B[j][1];
    if (start === 0){
      querySum = prefixSum[end];
    } else {
      querySum = prefixSum[end] - prefixSum[start-1];
    }
    result.push(querySum);
  }
  return result;
}

console.log(rangeSumQuery([7, 3, 1, 5, 5, 5, 1, 2, 4, 5], [[7, 10],[3, 10],[3, 5],[1, 10]]));
console.log(rangeSumQuery([1, 2, 3, 4, 5], [[1, 4], [2, 3]]));