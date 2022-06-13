const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');
// :8000 is the port

// get serialised url
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain), includes the port
console.log(myUrl.host);

// hostname, doesn't include the port
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialised query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abc', '123');
console.log('params appended');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
