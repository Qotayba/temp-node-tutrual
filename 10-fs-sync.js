const {readFileSync,writeFileSync}=require('fs');
console.log("start");
const first=readFileSync("./contant/first.txt",'utf-8');
const second=readFileSync('./contant/second.txt','utf-8');

writeFileSync('./contant/result-sync.txt',`here is the result : ${first} ,${second}`,{flag:'a'});
console.log ("i am done with this task ");
console.log ("starting the next one  ");