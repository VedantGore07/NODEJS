const promise = new Promise((resolve, reject) => {
    if(true){
        resolve("Hurray program working");
    }
    else{
        reject("there is an error")
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("error", err);
})

