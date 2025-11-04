const winston = require('winston')
const {combine, timestamp, prettyPrint, errors} = winston.format

winston.loggers.add('orderLogger', {
    level:'info',
    format:combine(timestamp(), prettyPrint(), errors({stack:true})),
    transports:[new winston.transports.Console(),
        new winston.transports.File({filename:'orders.log'})
    ],
    defaultMeta:{service:'orderService'}
})

winston.loggers.add('paymentLogger', {
    level:'info',
    format:combine(timestamp(), prettyPrint(), errors({stack:true})),
    transports:[new winston.transports.Console(),
        new winston.transports.File({filename:'payments.log'})
    ],
    defaultMeta:{service:'paymentService'}
})







