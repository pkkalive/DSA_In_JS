function littlePonnyMaxElement(A, B){
  let count = 0;
  let found = false;
  for (let num of A){
    if (num === B){
      found = true;
    }
    if(num > B){
      count++;
    }
  }
  if (found) return count;
  return -1;
}

console.log(littlePonnyMaxElement([2, 4, 3, 1, 5],3));
console.log(littlePonnyMaxElement([1, 4, 2],3));