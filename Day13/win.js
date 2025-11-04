require('./loggers')
const winston = require('winston')
const paymentLogger = winston.loggers.get('paymentLogger')
const orderLogger = winston.loggers.get('orderLogger')

// paymentLogger.info("payment received")
// orderLogger.error("order failed")

let requestHandler = (path) => {
    const profiler = paymentLogger.startTimer()
    for (let i=0; i<100000; i++)j=i*3
    profiler.done({message:`request to ${path} is processes`})
}

requestHandler("/payment")



