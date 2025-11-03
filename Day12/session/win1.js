const winston = require('winston')
// const {combine, timestamp, printf} = winston.format
const {combine, timestamp, json, prettyPrint, errors} = winston.format
const requestLog = {method:"GET", isAuthenticated:false}
const logger = winston.createLogger({
    level:'info',
    // format: winston.format.json(),
    // format: winston.format.cli(),
    // format: combine(timestamp(), printf((info) => `${info.timestamp}, ${info.level}, ${info.message}`)),
    format: combine(timestamp(), json(), prettyPrint(), errors({stack:true})),
    transports:[new winston.transports.Console(),
                new winston.transports.File({filename:'win1.log', level: 'warn'})
    ]
})


// logger.info("An info log", requestLog)
// logger.error("An error log", requestLog)

const childLogger = logger.child(requestLog)
childLogger.info("An info log")
childLogger.error("An error log", new Error('504 Gateway Timeout'))



