
//-----------------------------------------------------------------------------------------------------------
// ---------------Web Server---------------

// Module for http

const http = require('http');

// Create a server
const server = http.createServer((req,res) =>{
    // console.log(req);
    res.end('Hello From the Server');
});

server.listen(3000, '127.0.0.1' , () =>{
    console.log('Listening on port 3000');
});
