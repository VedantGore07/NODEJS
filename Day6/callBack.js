function task(cb)
{
    setTimeout(() => {cb(null, "hello");}, 0);
}

task((err, data) => {if(err) throw err;
                else console.log("callback data:", data);
});