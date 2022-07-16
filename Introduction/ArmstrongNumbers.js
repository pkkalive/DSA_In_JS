const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  console.log(armstrongNumbers(value));
  readline.close();
});

function armstrongNumbers(value){
  const N = Math.floor(value);
  const result = [];
  for (let i = 1; i <= N; i++){
    let output = getArmsStrongNumber(i);
    if (output === i){
      result.push(output);
    }
  }
  return result;
}

function getArmsStrongNumber(n){
  let last, sum = 0;
  while (n > 0){
    last = n % 10;
    sum += (last*last*last);
    n = Math.floor(n/10);
  }
  return sum;
}