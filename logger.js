let url ='https://www.youtube.com/watch?v=TlB_eWDSMt4';
function log(message){
    console.log(message);
}
 module.exports={url}
 module.exports.log=log;
 log("hi in logger ")
 
const fs= require('fs');
file=fs.readdirSync('./');
console.log(module);