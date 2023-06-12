//-----------------------------------------------------------------------------------------------------------
// ---------------READ and WRITE from files---------------
//              -------Synchronous Way-------
// Modules for reading and writing data

const fs = require('fs');

// Read from File

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Write to text

const tetxtOut = `This is what we know about the avocado : ${textIn} .\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', tetxtOut);
console.log(`File has been written..`);

