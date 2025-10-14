const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hai Welcome to NODE.JS')

const data = fs.readFileSync('hello.txt', 'utf-8')
console.log(data);