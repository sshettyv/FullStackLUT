const fs = require('fs');
const path = require('path');

//create folder
/* fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if(err)throw err;
console.log('Folder created.. ');
}); */

//create and write to file and appened to file
/* fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world',{},err=>{
    if(err)throw err;

    //file append
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),' appeneded the text',{},err=>{
        if(err)throw err;
    console.log('file appended.. ');
    });
console.log('file created.. ');
});
 */
//read file 
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
 
});
