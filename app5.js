//Readeable and Writable Streams-citeste continutul unui fisier in chunkuri, stream de date
//si fiecare chunk poate fi manipulat imediat ce este citit
//de ex. pe masura ce citim, trimitem acel continut intr-un nou fisier

//includem modulul files system:
const fs = require('fs');

const readStream = fs.createReadStream('./example1.txt','utf8');

//cream un alt stream in care scriem ceea ce citim din readStream, chunk-uri de date
const writeStream = fs.createWriteStream('example2.txt');

//ascultam evenimentul: data
// Functia fallback ia ca parametru "chunk" data si va fi chemata de fiecare data 
// cand apare o portie de date / chunk.
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);

// });

//citim acum un fisier mare de date ce contine giga (2,7 gigs in memorie odata, bufferul)
// fs.readFile('./largefile.txt',(err,file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
// });
// bufferul nu poate tine in memorie tot acest fisier, si atunci:


//urmatorul cod citeste fisierul in chunkuri de date:
const readStreamm = fs.createReadStream('./largefile.txt','utf8');

readStreamm.on('data',(chunk)=>{
    console.log(chunk);
});



