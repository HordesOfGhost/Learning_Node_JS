




//-----------------------------------------------------------------------------------------------------------
// ---------------READ and WRITE from files---------------
//              -------ASynchronous Way-------

// Modules for reading and writing data

// const fs = require('fs');

// Read from file

// fs.readFile('./starter/txt/start.txt','utf-8', (err, data1) => {
//     if (err) return console.log('ERROR!!!')
//     fs.readFile(`./starter/txt/${data1}.txt`,'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt','utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./starter/txt/final.txt',`${data2}\n${data3}`,'utf-8',err =>{
//                 console.log('Your file has been written :) ');
//             })
//         });
//     });
// });

// console.log(`Will Read File...`)

//-----------------------------------------------------------------------------------------------------------
// ---------------READ and WRITE from files---------------
//              -------Synchronous Way-------
// Modules for reading and writing data

// const fs = require('fs');

// Read from File

// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// Write to text

// const tetxtOut = `This is what we know about the avocado : ${textIn} .\n Created on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', tetxtOut);
// console.log(`File has been written..`);


//-----------------------------------------------------------------------------------------------------------
// ---------------PRINT Hello World---------------

// const hello = 'Hello World';
// console.log(hello);