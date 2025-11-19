// file paths

// const path =require('path')
// const finalPath=path.join("folder", "subfolder", "file.txt")
// console.log(finalPath)


// const path =require('path')
// const file=path.basename("/home/user/docs/file.txt", ".txt")
// console.log(file)


// const path =require('path')
// const name = path.dirname("/home/user/docs/file.txt")
// console.log(name)



// const path =require('path')
// const name = path.extname("file.txt")
// console.log(name)



// const path =require('path')
// const obj = path.parse("/home/user/docs/file.txt")
// console.log(obj)




// const path =require('path')
// const newPath = path.format({
//     dir:'/home/user/docs',
//     base:'image.png'
// });
// console.log(newPath)




// Q1. organise files by extension  uploads   pdf jpg png txt  



const fs = require('fs')
const fsp = require('fs').promises;
const path = require('path');

const uploadDir = './desti';

(async () => {  
    try {
        const files = await fsp.readdir(uploadDir);
        for (const file of files) {
            const ext = path.extname(file).slice(1); 
            const extDir = path.join(uploadDir, ext);
            if (!fs.existsSync(extDir)) {
                await fsp.mkdir(extDir);
            }
            const oldPath = path.join(uploadDir, file);
            const newPath = path.join(extDir, file);
            await fsp.rename(oldPath, newPath);
            console.log(`Moved: ${file} to ${ext}/`);
        }
    } catch (err) {
        console.error('Error organizing files:', err);
    }
})();



//  or 


// const fs = require('fs');
// const path = require('path');

// const sourceFolder = "./mixed/demo document";

// const pdfFolder = './pdfs';
// const imageFolder = './images';
// const textFolder = './texts';
// const otherFolder = './others';

// const files = fs.readdirSync(sourceFolder);
// [
//     './pdfs',
//     './images',
//     './texts',
//     './others'
// ].forEach(folder => {
//     if (!fs.existsSync(folder)) {
//         fs.mkdirSync(folder);
//     }
// });

// files.forEach(file => {
//     const ext = path.extname(file).toLowerCase();
//     const sourcePath = path.join(sourceFolder, file);

//     let destPath;

//     if (ext === '.pdf') destPath = path.join(pdfFolder, file);
//     else if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) destPath = path.join(imageFolder, file);
//     else if (['.txt', '.md'].includes(ext)) destPath = path.join(textFolder, file);
//     else destPath = path.join(otherFolder, file);

//     fs.renameSync(sourcePath, destPath);
//     console.log(`Moved: ${file} → ${destPath}`);
// });






