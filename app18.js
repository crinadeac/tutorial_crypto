//what Middleware is, custom Middleware
//middleware is the code that gets executed between the user request 
// and the server itself... cum ar fi functia bodyparser.json() care cerceteaza daca userul trimite json
const express = require("express");
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json()); // parseaza continutul, verif. daca e json si il adauga la req.body
app.use((req,res,next)=>{   //metoda next este invocata oricand cream custom middleware
    //console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});

app.get('/',(req,res)=>{
        console.log(req.banana);
        res.send('Middleware');
   });

app.listen(3000);
//node app18
//tiparim in browser localhost:3000/example
//vizualizam consola terminal, printare tip request, req.url = /test, req.method = GET