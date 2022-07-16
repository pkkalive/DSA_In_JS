function reverseArray(A){
  let start = 0, end = A.length - 1;
  while(start <= end){
    [A[start], A[end]] = [A[end], A[start]];
    start++;
    end--;
  }
  return A;
}

console.log(reverseArray([1,2,3,2,1]));
console.log(reverseArray([1,1,10]));