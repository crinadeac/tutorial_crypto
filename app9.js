//serving Static Files with http and File System Modules
//cum putem servi fisiere statice utilizand http si modulul file system

//Ctrl+B pentru vizualizare fisiere si foldere in sidebar

//vom facem un request la server sa ne trimita niste fisiere (example.json, example.png, index.html)
const http = require('http');
const fs = require('fs');
//cream serverul si chemam metoda listen pe portul 3000
//si ne propunem sa citim dintr-un fisier html
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./index.html');
    res.writeHead(200,{'Content-type': 'text/html'}); //200 = request has been successfully completed
    readStream.pipe(res);  //response object este un writtable stream
}).listen(3000);

//scriem in consola Ctrl C, apoi node app9
//apoi testam in Chrome http://localhost:3000/ si vedem ca se vizualizeaza index.html
//vedem continutul fisierului index.html care a fost trimis cu succes in browser

//exersam acelasi lucru cu celelalte tipuri de fisiere example.json, example.png
// const server = http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./example.json');
//     res.writeHead(200,{'Content-type': 'application/json'}); //200 = request has been successfully completed
//     readStream.pipe(res);  //response object este un writtable stream
// }).listen(3000);

// const server = http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.png');
//     res.writeHead(200,{'Content-type': 'image/png'}); //200 = request has been successfully completed
//     readStream.pipe(res);  //response object este un writtable stream
// }).listen(3000);