function timeEquality(A){
  let max = A[0];
  let ans = 0
  for (let num of A){
    max = Math.max(max, num);
  }
  for (let num of A){
    ans += (max - num);
  }
  return ans;
}

console.log(timeEquality([2, 4, 1, 3, 2]));