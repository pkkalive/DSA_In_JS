function searchElement(A, B){
  for (let num of A){
    if (num === B){
      return 1;
    }
  }
  return 0;
}

console.log(searchElement([4,1,5,9,1], 5));
console.log(searchElement([7,7,2], 1));