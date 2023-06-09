const EventEmitter = require('events');
// const emitter = new EventEmitter();


const Logger = require('./logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLoaded',(arg) =>{
    console.log('Listener called',arg);
});

logger.log('message');