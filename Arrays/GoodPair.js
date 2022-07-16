function goodPair(A, B){
  for (let i = 0, len = A.length; i < len; i++){
    for (let j = i+1; j < len; j++){
      if (i !== j && (A[i] + A[j]) === B){
        return 1;
      }
    }
  }
  return 0;
}

console.log(goodPair([1,2,3,4], 7));
console.log(goodPair([1,2,4], 4));
console.log(goodPair([1,2,2], 4));