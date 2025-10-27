// function divideNum(a, b) {


//   try {
//     if (isNaN(a) || isNaN(b)) {
//       throw new Error("Invalid input");
//     }

//     if (b === 0) {
//       throw new Error("Divi by zero is not allowed.");
//     }

//     let result = a / b;
//     console.log(`Result: ${result}`);
//   } 
//   catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
  
// }

// divideNum(10, 2);  
// divideNum(10, 0);   
// divideNum("a", 2);  




//// using callback

// function divideNum(a, b, callback) {

//     if (isNaN(a) || isNaN(b)) {
//       callback("Invalid input");
//       return;
//     }

//     if (b === 0) {
//       callback("Division by zero is not allowed.");
//       return;
//     }

//     const result = a / b;
//     callback(null, result);

// }

// divideNum(10, 2, (err, result) => {
//   if (err) console.error("Error:", err);
//   else console.log("Result:", result);
// });

// divideNum(10, 0, (err, result) => {
//   if (err) console.error("Error:", err);
//   else console.log("Result:", result);
// });

// divideNum("x", 5, (err, result) => {
//   if (err) console.error("Error:", err);
//   else console.log("Result:", result);
// });



//// using promises


// function divideNum(a, b) {              
//     return new Promise((resolve, reject) => {
//         if (isNaN(a) || isNaN(b)) {
//             reject("Invalid input");
//             return;
//         }
//         if (b === 0) {
//             reject("Divi by zero is not allowed.");
//             return;
//         }       

//         const result = a / b;
//         resolve(result);
//     });
// }   

// divideNum(10, 2)
//     .then(result => console.log("Result:", result))
//     .catch(err => console.error("Error:", err));            

// divideNum(10, 0)
//     .then(result => console.log("Result:", result))         
//     .catch(err => console.error("Error:", err));

// divideNum("x", 5)
//     .then(result => console.log("Result:", result))
//     .catch(err => console.error("Error:", err));





/// using process.on

function divideNum(a, b) {              
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input");
    }
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return result = a / b;
    
}


process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection at:', err.message);
});        

console.log(divideNum(10, 0));
console.log(divideNum("x", 5));
console.log(divideNum(10, 2));
































































