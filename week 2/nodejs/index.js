// person.js
// const Person = require('./person');

// const person1 = new Person('john doe', 30);

// person1.greeting();

// logger.js
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('called listener: ', data));

// logger.log('hello world');
// logger.log('hello world 2');
// logger.log('hello world 3');

const http = require('http');
const path = require('path');
const fs = require('fs');
// const { extname } = require('path');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     }
    //     );
    // }

    // // if (req.url === '/about') {
    // //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) =>{
    // //         if(err) throw err;
    // //         res.writeHead(200, {'Content-Type': 'text/html'});
    // //         res.end(content);
    // //     }
    // //     );
    // // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'bob smith', age: 40},
    //         {name: 'john doe', age: 30}
    //     ];

    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
    );

    // console.log(filePath);
    // res.end();

    // getting file extension
    let extName = path.extname(filePath);

    // inital content type
    let contentType = 'text/html';

    // check extensions and set content type
    switch(extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            //errors
            if(err.code == 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                // some server error
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        } else {
            // success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));