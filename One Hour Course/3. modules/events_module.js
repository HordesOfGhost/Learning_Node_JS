// Is a class
const EventEmitter = require('events');
// Instance of a class
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged',function(arg){ // e or eventArg
    console.log('Listener called',arg);
});

// emit means to make a noise
// Raise a event
emitter.emit('messageLogged',{id :1, url : 'https://'});


