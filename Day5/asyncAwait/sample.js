//// async await   (for appendfile)

// const fs = require('fs/promises')

// async function appendFiles(){
//     try{
//         const data1 = await fs.readFile('file1.txt', 'utf-8')
//         const data2 = await fs.readFile('file2.txt', 'utf-8')

//         await fs.writeFile('final.txt', data1+data2)
//         console.log('files are combined')
//     }catch(err){
//         console.log(err)
//     }
// }

// appendFiles();





///////////////////////////////////////////////////////

//// renaming file


// const fs = require('fs')

// fs.rename('file1.txt', 'newfile.txt', (err) => {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log('file is renamed')
//     }
// })



///////////////////////////////////////////////////


///// removing file

// const fs = require('fs')

// fs.unlink('newfile1.txt', (err) => {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log('file deleted')
//     }
// })



///////////////////////////////////////////////


//// rename and delete 


const fs = require('fs/promises')

async function renameDelete(){
    
    try{
        await fs.rename('file4.txt', 'new4.txt')
        console.log('file renamed')

        await fs.unlink('newfile1.txt')
        console.log('file is deleted')
    }catch(err){
        console.log(err)
    }
}


renameDelete();




























