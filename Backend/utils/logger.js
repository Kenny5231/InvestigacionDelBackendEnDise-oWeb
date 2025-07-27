// Kenny: logger con Morgan y Winston
const morgan = require('morgan');
const winston = require('winston');
const logger = winston.createLogger({ transports: [new winston.transports.Console()] });
module.exports = { requestLogger: morgan('combined'), logger };
