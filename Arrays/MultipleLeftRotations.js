function multipleLeftRotations(A, B){
  const len = A.length;
  const result = [];
  for (let k of B){
    const temp = [];
    k = k % len;
    for (let i = k; i < len; i++){
      temp.push(A[i]);
    }
    for (let i = 0; i < k; i++){
      temp.push(A[i]);
    }
    result.push(temp);
  }
  return result;
}

console.log(multipleLeftRotations([1, 2, 3, 4, 5], [2, 3]));
console.log(multipleLeftRotations([5, 17, 100, 11], [1]));
console.log(multipleLeftRotations([0], [0]));