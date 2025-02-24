
//serving static files with Express
// cum ascundem calea fisierului in pathul din browser
const express = require('express');
const path = require('path');
const app = express();
//mapam calea cu un alias (public), sa nu se vada numele folderului"example", pe net
//"example" este numele unui folder din site
app.use('/public',express.static(path.join(__dirname,'example')));

app.get('/',(req,res)=>{
   //res.send('hello world');
   res.sendFile(path.join(__dirname,'example','index.html'));
});

app.listen(3000);

//in terminal node app12 
//in chrome observam ca este servita pagina index.html pe localhost:3000 ((rootul principal)
// fara sa se vada calea sus
//ne uitam in sursa fisierului index.html observam ca este inlocuita sursa 
// folderului cu "public" in loc de "example"
// href = "/public/css/main.css"
