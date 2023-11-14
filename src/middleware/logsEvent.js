const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json } = winston.format;
const moment = require('moment');
const path = require('path');
const { time } = require('console');
const config = require('../configs/config');
require('winston-mongodb');

const fileRotateTransport = new winston.transports.DailyRotateFile({
    format: winston.format.printf(({ timestamp, data, level }) => {
        return `[${moment(timestamp).format('DD-MM-YYYY HH:mm:ss')}] - [${level.toString().toUpperCase()}] - [${data}]`;
    }),
    filename: path.join(__dirname, "../../logs/", "%DATE%.log"),
    datePattern: 'YYYYMMDDHHmmss',
    maxFiles: '14d',
    maxSize: '20m',
});

const logMongoTransport = new winston.transports.MongoDB({
    format: winston.format.metadata(),
    // metaKey: 'meta',
    tryReconnect: true,
    db: config.mongo_uri_log,
    collection: 'testLOG',
    options: { useNewUrlParser: true, useUnifiedTopology: true }
});

const logger = winston.createLogger({
    // level: 'info',
    // format: combine(timestamp(), json()),
    transports: [fileRotateTransport, logMongoTransport],
});

// // fired when a log file is created
// fileRotateTransport.on('new', (filename) => {});
// // fired when a log file is rotated
// fileRotateTransport.on('rotate', (oldFilename, newFilename) => {});
// // fired when a log file is archived
// fileRotateTransport.on('archive', (zipFilename) => {});
// // fired when a log file is deleted
// fileRotateTransport.on('logRemoved', (removedFilename) => {});

class Logger {
    error = (timestamp, data) => {
        timestamp.format('YYYYMMDDHHmmss')
        logger.error('error', { timestamp, data });
    };
    info = (timestamp, data) => {
        timestamp.format('YYYYMMDDHHmmss')
        logger.info('info', { timestamp, data });
    };
    warn = (timestamp, data) => {
        timestamp.format('YYYYMMDDHHmmss')
        logger.warn('warn', { timestamp, data });
    }
}

module.exports = Logger;