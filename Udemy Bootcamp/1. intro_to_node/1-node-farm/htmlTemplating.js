//----------------------------------------------------------------------------
//-------------------------------HTML Templating------------------------------

const http = require('http');
const url  = require('url');
const fs   = require('fs');

const replaceTemplate = require('./modules/replaceTemplate'); 

//Reading Data and Templates
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req,res) => {
    // console.log(req.url);
    // console.log(url.parse(req.url,true));

    const {query, pathname} = url.parse(req.url,true);
    // const pathname = req.url;


    //Overview
    if(pathname == '/' || pathname =='/overview'){
        res.writeHead(200, {
            'Content-type' : 'text/html'
        });

        // Making cardsHtml based on JSON data just replacing the values and making a list of html lines
        const cardsHtml = dataObject.map(el => replaceTemplate(templateCard, el)).join('');

        const output = templateOverview.replace(`{%PRODUCT_CARDS%}`, cardsHtml);
        // console.log(cardsHtml);
        res.end(output);
    }
    
    //Product
    else if(pathname == '/product'){
        const product = dataObject[query.id];
        const output = replaceTemplate(templateProduct, product);

        res.end(output);
    }

    //API
    else if(pathname == '/api'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(data);
    }
    
    //Not Found
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header': 'hello-world'
        });
    }
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Listening to port 3000');
});