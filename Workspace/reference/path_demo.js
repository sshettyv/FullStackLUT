const path = require('node:path'); 

//base file name
console.log(path.basename(__filename));

//create path object
//console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate 
console.log(path.join(__dirname, 'test','path.js'));