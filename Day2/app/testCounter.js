const counter1 = require('../module1/counter')

console.log(counter1.increment());
console.log(counter1.increment());
// console.log(require.cache);
delete require.cache[require.resolve('../module1/counter')]

const counter2 = require('../module1/counter')
console.log(counter2.increment());
// console.log(require.cache);

