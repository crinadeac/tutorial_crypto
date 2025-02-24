//1:54
//handle HTTP Post Request using Express and Body Parser Modules
const express = require('express');
const path    = require('path');
const app     = express();
//mapam calea cu un alias (public), sa nu se vada numele folderului"example", pe net
//"example" este numele folderului in care avem fisierele siteului
app.use('/public',express.static(path.join(__dirname,'')));

app.get('/',(req,res)=>{
   //res.send('hello world');
   res.sendFile(path.join(__dirname,'','index.html'));
});
//dirname este gol, caci nu am nici un folder in radacina sitului de ascuns
app.listen(3000);
//vom instala modulul body-parser care parseaza formularul
//scriem in terminal: npm install body-parser
const bodyParser  = require('body-parser');
const { Console } = require('console');
app.use(bodyParser.urlencoded({extended: false})); //setam extended la false doearece lucram cu obiecte simple

//post JSON data to the server using jquery ajax (vezi in index.html)
app.use(bodyParser.json());
// trimitem datele in format JSON cu modulele express si parsing-module

//body-parser-ul parseaza datele din formular si le ataseaza la obiectul request
app.post('/',(req,res)=>{
    console.log(req.body); // req.body  este un obiect cu proprietatile: email si password
    //some database call here
    res.json({success: true}); //converteste obiectul javascript  in json
});
//observam in terminal/consola datele introd in form, serializate 
//  [ 
//   { name: 'email', value: 'crina.deac@impromedia.ro' },
//   { name: 'password', value: 'dcdcdc' }
// ]
//aceste daye nu reprez un JSON, sunt un array, parserul il converteste la obiect javascript
