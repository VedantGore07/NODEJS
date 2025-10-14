let count = 0;

function increment(){
    count++;
    return count;
}

console.log(`counter.js is loaded`);

module.exports = {increment}