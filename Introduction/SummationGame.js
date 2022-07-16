const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  summationGame(value);
  readline.close();
});

function summationGame(value){
  const N = Math.floor(value);
  const result = (N * (N + 1))/2;
  console.log(result);
}
