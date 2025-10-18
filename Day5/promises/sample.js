///// fs promise (using .then)


const fs = require('fs/promises')
or
const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf-8')
.then(data1 => {
    return fs.readFile('file2.txt', 'utf-8')
    .then(data2 => {
        return fs.writeFile('final.txt', data1+data2)
    });
})
.then(() => {
    console.log('files combined')
})
.catch(err => {
    console.log(err)
});
