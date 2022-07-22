function countEvenOdd(A){
  const len = A.length;
  const evenPrefix = [], oddPrefix = [];
  let count = 0;
  evenPrefix[0] = A[0];
  oddPrefix[0] = 0;
  for (let i = 1; i < len; i++){
      if ( i % 2 === 0){
        evenPrefix[i] = evenPrefix[i-1] + A[i];
        oddPrefix[i] = oddPrefix[i-1];
      } else {
        evenPrefix[i] = evenPrefix[i-1];
        oddPrefix[i] = oddPrefix[i-1] + A[i];
      }
  }

  for (let j = 0; j < len; j++){
    let evenSum = 0, oddSum = 0;
    if (j === 0){
      evenSum = evenPrefix[len-1] - evenPrefix[j];
      oddSum = oddPrefix[len-1] - oddPrefix[j];
    } else {
      evenSum = evenPrefix[j-1] + oddPrefix[len-1] - oddPrefix[j];
      oddSum = oddPrefix[j-1] + evenPrefix[len-1] - evenPrefix[j];
    }
    if (evenSum === oddSum){
      count += 1;
    }
  }
  return count;
}

console.log(countEvenOdd([2, 1, 6, 4]));