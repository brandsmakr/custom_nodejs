const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('tut24.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
})

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('server is running and listning on port 80');
//     console.log('127.0.0.1:80');
// })

server.listen(80, '127.0.0.1', ()=>{
    console.log('server is running and listning on port 80');
    console.log('127.0.0.1:80');
})