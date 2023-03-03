const {readFile,writeFile}=require('fs');
console.log("start");
readFile("./contant/first.txt",'utf-8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first=result;
    readFile("./contant/second.txt",'utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./contant/result-async.txt',`here is the result : ${first} ,${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("done this task");

        });
    })
});

console.log ("starting the next one  ");