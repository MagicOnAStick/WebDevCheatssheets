
/* Require is part of node.js and loads modules */
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = '3000';

fs.readFile('index.html',(err,html)=>{
    if (err) {
        throw err;
    }


    /* (param1,param2) => {} is the same as function(param1,param2){} ES15 */
    const server = http.createServer((req,res) => {
        res.statusCode = 200;
        res.setHeader = ('Content-type', 'text/html');
        /* HTML is the the buffer with file data */
        res.write(html);
        res.end();
    });

    server.listen(port,hostname,() => {
        console.log('Server startet on port'+port);
});
});