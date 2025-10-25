function doSomething(){
    console.log("hello");   
}

process.on('uncaughtException', (e) => {console.log("there is an error", e.message);
    process.exit(1);
})
doSomething();