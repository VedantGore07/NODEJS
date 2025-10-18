
//// fs callback hell  -->  nested callback

// const fs = require('fs')

// fs.readFile('file1.txt', 'utf8', (err, data1) => {
//   if (err) throw err;

//   fs.readFile('file2.txt', 'utf8', (err, data2) => {
//     if (err) throw err;
//     fs.writeFile('final.txt', data1+data2, (err) => {
//       if (err) throw err;
//       console.log('Files merged successfully!');
//     });
//   });
// });



/////// fs promise (using .then)


// const fs = require('fs/promises')
// or
// const fs = require('fs').promises;

// fs.readFile('file1.txt', 'utf-8')
// .then(data1 => {
//     return fs.readFile('file2.txt', 'utf-8')
//     .then(data2 => {
//         return fs.writeFile('final.txt', data1+data2)
//     });
// })
// .then(() => {
//     console.log('files combined')
// })
// .catch(err => {
//     console.log(err)
// });

























































































