//working with file system module: to create files, read files, 
// delete files, create folders
//require the file module into our project

//cum cream un fisier
const { isUtf8 } = require('buffer');
const fs = require('fs');
// fs.writeFile('example.txt','this is an example',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }

// });


//cum redenumim un fisier
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('file successfully renamed');
// });



//in caz ca am uitat sa adaugam ceva in fisierul creat

// fs.appendFile('example2.txt','Some data being appended',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// })

//cum stergem un fisier
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully deleted the file');
});