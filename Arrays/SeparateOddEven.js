function separateOddEven(A){
  const even_arr = [];
  const odd_arr = [];

  for (let num of A){
    if (num % 2 === 0){
      even_arr.push(num);
    } else {
      odd_arr.push(num);
    }
  }
  console.log(even_arr);
  console.log(odd_arr);
}


separateOddEven([ 1,2,3,4,5]);
separateOddEven([2,2,2]);