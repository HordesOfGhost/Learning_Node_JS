console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message){
    // Send HTTP Request
    console.log(message);
}

// Creating Module Passing as Object
// module.exports.log = log;

// Creating Module Passing as Function
module.exports = log;

// module.exports.endPoint = url;