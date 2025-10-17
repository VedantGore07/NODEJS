// synchronous (file reading) (code blocking)

// const fs = require('fs');

// console.log("start");

// let data = fs.readFileSync('Day4.txt', 'utf-8')

// console.log(data);

// console.log("end");


// Asynchronous (file reading) (non blocking --> main execution isn't blocked)

// const fs = require('fs');

// console.log("start");

// fs.readFile('Day4.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log('Async read :',data)
// })

// console.log("end");



/////////////////////////////////////////////////////////////

/////////// Asynchronous (file writing)

// const fs = require('fs')

// fs.writeFile('file.txt', 'this is another file', (err) => {
//     if(err) throw err;

//     console.log('File created and written data successfully!')
// });

// console.log('end');



////// synchronous (file writing)

// const fs = require('fs')

// console.log('start');

// fs.writeFileSync('File1.txt', 'this is another file1');

// console.log('end');



//// append file  (asynchronously)

// const fs = require('fs')

// fs.appendFile('file.txt', 'this is another text appended', (err) => {
//     if(err) throw err;

//     console.log('File created and written data successfully!')
// });


//////// append file  (synchronously)

// const fs = require('fs')

// fs.appendFileSync('File1.txt', 'one more text appended');


///// open  (asynchronously)

// const fs = require('fs')
// fs.open('file3.txt', 'w', (err,file) => {
//     if(err){
//         console.log('error opening file', err);
//         return;
//     }

//     console.log('File created successfully')

//     fs.writeFile('file3.txt', 'Welcome to nodejs', (err) => {
//         if(err) throw err
//         console.log('Data written')
//     })
// });


//// open (synchronous)

// const fs = require('fs')
// fs.openSync('file4.txt', 'w');
// console.log('file created successfully');
// fs.writeFileSync('file4.txt', 'Welcome to NODEJS');
// console.log('Data Written');


/// readFile (asynchronous)

// const fs = require('fs')

// fs.readFile('file44.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log('Error reading file', err);
//         return;
//     }

//     console.log(data);
// })


// readFileSync (synchronous)

// const fs = require('fs')

// try{
//     let data = fs.readFileSync('file42.txt', 'utf-8')
//     console.log(data);
// }catch(err){
//     console.log('error reading file', err);
// }




// Q1. create file number.txt  12 3 4 5 78 3
// read numbers
// convert numbers from string to numeric values
// separate even and odd numbers 
// write all even numbers to even.txt and odd numbers to odd.txt
// do for both synchronous and then for asynchronous



// Synchronous

// const fs = require('fs');

// try {
//     const numbersData = fs.readFileSync('numbers.txt', 'utf-8');
//     const numbers = numbersData.trim().split(' ').map(num => parseInt(num));
//     let odds = [];
//     let evens = [];

//     function isEven(num) { return num % 2 == 0 }

//     for (let num of numbers) {
//         if (isEven(num)) evens.push(num);
//         else odds.push(num);
//     }
//     fs.writeFileSync('even.txt', evens.toString());
//     fs.writeFileSync('odd.txt', odds.toString());
// } catch (error) {
//     console.error(error);
// }



///////// Asynchronous

// const fs = require('fs');

// fs.readFile('numbers.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     const numbers = data.trim().split(' ').map(num => parseInt(num));
//     let odds = [];
//     let evens = [];

//     function isEven(num) { return num % 2 == 0 }

//     for (let num of numbers) {
//         if (isEven(num)) evens.push(num);
//         else odds.push(num);
//     }

//     fs.writeFile('even.txt', evens.toString(), (err) => {
//         if (err) {
//             console.error('Error writing even numbers:', err);
//             return;
//         }
//         console.log('Asynchronous: Even numbers written to even.txt');
//     });

//     fs.writeFile('odd.txt', odds.toString(), (err) => {
//         if (err) {
//             console.error('Error writing odd numbers:', err);
//             return;
//         }
//         console.log('Asynchronous: Odd numbers written to odd.txt');
//     });
// });





// Q2. Filter prime numbers
// number.txt read convert filter and store to prime.txt

// const fs = require('fs');

// fs.readFile('numbers.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     const numbers = data.trim().split(' ').map(num => parseInt(num));
//     let primes = [];
//     function isPrime(num) {
//         if (num <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     for (let num of numbers) {
//         if (isPrime(num)) primes.push(num);
//     }

//     fs.writeFile('prime.txt', primes.toString(), (err) => {
//         if (err) {
//             console.error('Error writing prime numbers:', err);
//             return;
//         }
//         console.log('Prime numbers written to prime.txt');
//     });
// });



// Q3. Duplicate line remover
// unique.txt  set


// const fs = require('fs');

// fs.readFile('unique.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     const lines = data.trim().split('\n');
//     const uniqueLines = Array.from(new Set(lines));
//     fs.writeFile('unique.txt', uniqueLines.join('\n'), (err) => {
//         if (err) {
//             console.error('Error writing unique lines:', err);
//             return;
//         }
//         console.log('Duplicate lines removed from unique.txt');
//     });
// });



////     or


const fs = require('fs');
const data = fs.readFileSync('unique.txt', 'utf-8');
const lines = data.split('\n');
const uniqueLines = [...new Set(lines)];
fs.writeFileSync('unique.txt', uniqueLines.join('\n'));
console.log('Duplicates removed and saved to unique.txt');














































