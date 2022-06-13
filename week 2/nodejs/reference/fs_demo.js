const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created');
// });

// create and write to a file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'hello world. ', 
//     err => {
//         if (err) throw err;
//         console.log('file created and written to');

//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'), 
//             'node.js is nice', 
//             err => {
//                 if (err) throw err;
//                 console.log('file created and written to');
//         });
// });

// read a file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('file has been renamed');
});