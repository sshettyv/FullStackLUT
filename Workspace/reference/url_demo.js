const url = require('url');

const myUrl = new URL ('http://web.com:800/hello.html?id=100&status=active');

//serialized url 
console.log(myUrl.toString());

console.log(myUrl.href);
// pathname 
console.log(myUrl.pathname);

// hostname with port number and without 
console.log(myUrl.host);
console.log(myUrl.hostname);

//params object
console.log(myUrl.searchParams);
//add params
myUrl.searchParams.append('ab','58');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name)=> console.log(`${name}:${value}`) );
