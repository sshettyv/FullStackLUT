const Logger = require ('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener' ,data  ));

logger.log('Hello World 1  ');
logger.log('Hello World  2 ');
logger.log('Hello World  3 ');