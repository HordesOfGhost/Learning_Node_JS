
//-----------------------------------------------------------------------------------------------------------
// ---------------Routing---------------

// Module for http

const http = require('http');
const url  = require('url');

// Create a server

const server = http.createServer((req,res) =>{
    // console.log(req);
    // Routing
    
    const pathName = req.url;
    if(pathName == '/'){
        res.end('Welcome to the Landing Page.');
    }
    else if(pathName == '/overview'){
        res.end('This is the overview');
    }else if(pathName == '/product'){
        res.end('This is the product');
    }else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, '127.0.0.1' , () =>{
    console.log('Listening on port 3000');
});
