// Load Built in path module
const path  = require('path')

var pathObj = path.parse(__filename);
console.log(pathObj)