const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  console.log(squareRoot(value));
  readline.close();
});

function squareRoot(n){
  const N = Math.floor(n);
  for (let i = 1; i * i <= N; i++){
    if((i * i) === N){
      return i;
    }
  }
  return -1;
}