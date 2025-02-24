//Pipes and Pipe Chaining - are nevoie de 2 streamuri, source stream si writable stream
//pipes ia o sursa de stream (un readable stream example1.txt) si o trimite
//la o destinatie care este un writable stream (scrie in example2.txt)

const fs = require('fs');
const readStream  = fs.createReadStream('./example1.txt','utf8');
//const writeStream = fs.createWriteStream('example2.txt');

//Pipe Chaining
//avem nevoie de modulul zlib - pentru compresie de fisiere
const zlib = require('zlib');

//in loc sa scriem urmatorul cod folosit in app5, vom inlocui totul cu "pipe"
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// });
//readStream.pipe(writeStream);


//cream un "transform stream" care ia un stream si il transforma intr o anumita
// forma intr-un alt stream
const gzip = zlib.createGzip(); //returneaza un "transform stream"
//corectam cu extensia gz de fisier zipat
const writeStream = fs.createWriteStream('example2.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
// pipe ia chunckul de date citit de readStream si il comprima prin pipe gzip
//apoi pipe in continuare si il scrie in writeStream sub forma zip comprimata