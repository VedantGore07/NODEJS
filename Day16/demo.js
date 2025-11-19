// fs fs.promises

// const fs = require('fs')
// const dir = './test'
// try{
//     if(fs.existsSync(dir)){
//         console.log('Directory exists')
//     }
//     else{
//         console.log('Directory does not exist')
//     }
// }catch(err){
//     console.log(err)
// }


// const fs = require('fs');
// const fsp = require('fs').promises;

// const dir = './test';

// (async () => {
//     try {
//         await fsp.access(dir, fs.constants.F_OK);
//         console.log('exists');
//     } catch (err) {
//         console.log('does not exist');
//     }
// })();




// const fs = require('fs');

// const dir = './a'
// try{
//     fs.mkdirSync(dir);
//     console.log('directory created')
// }catch(err){
//     if(err.code == 'EEXIST')
//         console.log('already exists')
//     else{
//         console.log('error creating directory', err)
//     }
// }



// const fs = require('fs');

// const dir = './a'
// try{
//     fs.mkdirSync('./b/c/d', {recursive:true});
//     console.log('nested directories created')
// }catch(err){
//     console.log('error creating directory')
// }






// const fs = require('fs');
// const fsp = require('fs').promises;

// (async () => {
//     try {
//         await fsp.mkdir('./a1/b1/c1', {recursive:true});
//         console.log('created');
//     } catch (err) {
//         console.log('does not created');
//     }
// })();





// const fs = require('fs');
// const fsp = require('fs').promises;

// const dir = './a'
// try{
//     const items = fs.readdirSync(dir, {withFileTypes:true});

//     for(const entry of items){
//         if(entry.isDirectory()) console.log('[DIR]]', entry.name);
//         else if(entry.isFile()) console.log('[FILE]]', entry.name);
//         else(console.log('other'))
//     }
// }catch(err){
//     console.log(err)
// }





// const fs = require('fs');
// const fsp = require('fs').promises;

// const dir = './a';

// (async () => {
//     try {
//         const items = await fsp.readdir(dir, { withFileTypes: true });

//         for (const entry of items) {
//             if (entry.isDirectory()) console.log('[DIR]', entry.name);
//             else if (entry.isFile()) console.log('[FILE]', entry.name);
//             else console.log('[OTHER]', entry.name);
//         }

//     } catch (err) {
//         console.log(err);
//     }
// })();




// const fs= require('fs')
// //const fsp=require('fs').promises;
// const dir='./a'
// try{
//     const stats=fs.statSync(dir)
//     console.log(
//         'isFile:', stats.isFile(),
//         'isDIR:', stats.isDirectory(),
//         'size: ',stats.size
//     );
// }catch(err){
//     console.log('err')
// }





// const fs = require('fs');
// const fsp = require('fs').promises;

// const dir = './a';

// (async () => {
//     try {
//         const stats = await fsp.stat(dir);
//         console.log(
//             'isFile:', stats.isFile(),
//             'isDIR:', stats.isDirectory(),
//             'size:', stats.size
//         );
//     } catch(err) {
//         console.log('err');
//     }
// })();





// const fs= require('fs')
// //const fsp=require('fs').promises;
// const dir='./test'

//     try{
//         fs.rmdirSync(dir)
//         console.log('removed')
    
    
// }catch(err){
//     console.log('cant remove :',err)
// }




// const fs= require('fs')
// //const fsp=require('fs').promises;
// const dir='./y'

//     try{
//         fs.rmSync(dir,{recursive:true,force:true})
//         console.log('removed')
    
    
// }catch(err){
//     console.log('cant remove :',err)
// }





// const fs = require('fs');
// const fsp = require('fs').promises;

// const dir = './y';

// (async () => {
//     try {
//         await fsp.rm(dir, { recursive: true, force: true });
//         console.log('removed');
//     } catch (err) {
//         console.log('cant remove:', err);
//     }
// })();



// const fs= require('fs')
// //const fsp=require('fs').promises;
// const source='./a'
// const dest='./d'

// try{
//         fs.cpSync(source,dest,{recurisve:true})
//         console.log('copied')
    
    
// }catch(err){
//     console.log('cant copy :',err)
// }




// const fsp = require('fs').promises;

// const source = './a';
// const dest = './desti';

// (async () => {
//     try {
//         await fsp.cp(source, dest, { recursive: true });
//         console.log('copied');
//     } catch (err) {
//         console.log('cant copy :', err);
//     }
// })();


 

const fsp = require('fs').promises;

(async () => {
    try {
        await fsp.rename('./a', './newA');
        console.log('renamed');
    } catch (err) {
        console.log('cant rename:', err);
    }
})();




