const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  isPrime(value);
  readline.close();
});

function isPrime(value){
  const N = Math.floor(value);
  for (let i = 2; i * i <= N; i++){
    if(N % i === 0){
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}