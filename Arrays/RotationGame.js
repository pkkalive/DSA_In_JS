function reverse(arr, start, end){
  while(start < end){
    [arr[start],arr[end]]= [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotationGame(A, B){
  const N = A.length;
  B = B % N;
  if(B){
    reverse(A, 0, N-1);
    reverse(A, 0, B-1);
    reverse(A, B, N-1);
  }
  return A;
}

console.log(rotationGame([1,2,3,4], 2));