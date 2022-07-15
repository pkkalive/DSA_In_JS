const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  isItPerfect(value);
  readline.close();
});

function isItPerfect(value){
  const N = Math.floor(value);
  let sum = 1;
  for (let i = 2; i * i <= N; i++){
    if(N % i === 0) {
      if (N / i === i) {
        sum += i;
      } else {
        sum += i;
        sum += N/i;
      }
    }
  }
  if (sum === N) {
    console.log("Yes");
  } else {
    console.log("NO");
  }
}