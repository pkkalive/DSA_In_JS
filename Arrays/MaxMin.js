function maxMin(A){
  let max = A[0], min = A[0];
  for (let num of A){
    if (num > max){
      max = num;
    }
    if (num < min){
      min = num;
    }
  }
  console.log(min, max);
}

maxMin([1,2,3,4,5]);
maxMin([10,50,40,80]);