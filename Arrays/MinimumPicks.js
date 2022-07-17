function minimumPicks(A){
  const len = A.length;
  if (len <= 1) return -1;
  let max_even = -Infinity, min_odd = Infinity;
  for (let num of A){
    if (num % 2 === 0){
      max_even = Math.max(max_even, num);
    } else {
      min_odd = Math.min(min_odd, num);
    }
  }
  return max_even - min_odd;
}

console.log(minimumPicks([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]));
console.log(minimumPicks([-15, -45, 43, 23, -63, 69, 35, 19, 37, -52]));