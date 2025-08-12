const { log } = require('console');
const fs=require('fs');

//Sync...
//fs.writeFileSync("./test.txt","hey vaibhav");


//Async...
//fs.writeFile("./test.txt","hey vaibhav Async",(err)=>{});


//Sync read ...
// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

//Async
console.log("1");

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);      
//     }
//     else{
//         console.log(result);
        
//     }
// })
console.log("2");
console.log("3");
console.log("4");


//fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt","hey there");
// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");

//console.log(fs.statSync("./test.txt"));

//fs.mkdirSync("my-docs");

const os = require("os");
console.log(os.cpus().length);
