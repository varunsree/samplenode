//Example - spawn command - to execute commands :::::::::::::::::: to execute commands :::::::::::::

const { spawn } = require("child_process");
 var options = [];
const s = spawn('npm', ['install', 'graphql'], {
 cwd: global
});

// const s = spawn('npm', ['install', 'graphql'], {
//   cwd: global
//  });
console.log("sssssssssssssssssssssssssssssssssss", s.stdin);
process.stdin.pipe(s.stdin)//execute requestor from here

s.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

s.on("close", async (code) => {
  console.log("Completedddd");
});