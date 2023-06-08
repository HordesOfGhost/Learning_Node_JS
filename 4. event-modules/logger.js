const EventEmitter = require('events');
// const emitter = new EventEmitter();

class Logger extends EventEmitter{
    // Now a method of this class
    log(message){
        console.log(message);
        
        // Raise a event
        this.emit('messageLoaded',{ id : 1, url : 'http://'});
    }
    
}

module.exports = Logger;