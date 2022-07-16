const readline = require("readline").createInterface({
  input: process.stdin.setEncoding("utf-8"),
  output: process.stdout
});

readline.question("", value =>{
  multiplicationTable(value);
  readline.close();
});

function multiplicationTable(n){
  for (let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
  }
}