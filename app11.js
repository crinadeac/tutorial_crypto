//Express Web Framework - expressjs.com
//setarea unui server Express - npmjs.com / search: express: minimalist web framework for Node.js.
//cream package.json tastand in terminal: npm init --yes
//instalam npm express: npm install express
//in package.json apare dependencies:express

//acum aducem acest modul in aplicatia noastra
const express = require('express');
const app = express(); //un obiect cu multe metode

app.get('/',(req,res)=>{
    res.send('Hello World');
});
// '/' indica indexul paginii, prima pagina din aplicatie

//adaugam portul unde ascultam raspunsul
app.listen(3000);

//lansam in terminal node app11 apoi deschidem chrome si vedem mesajul http://localhost:3000/
// Express Get Requests

//definim o alta ruta
app.get('/example',(req,res)=>{
    res.send('hitting example route');
});
//cum trimitem parametri in ruta
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);   //params sunt name si age pasati in calea http
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});
//scriem in terminal node app11, apoi in chrome: http://localhost:3000/example/crina/50
//si vedem in consola afisarea unui obiect cu param din request:{ name: 'crina', age: '50' }

//res.query afiseaza in terminal un obiect gol {}
//daca accesam http://localhost:3000/example/crina/50?tutorial=paramstutorial
//observam ca obiectul din consola este populat: { tutorial: 'paramstutorial' }
//avem o proprietate = tutorial si avem o valoare = paramstutorial

//acum pasam mai multe stringuri ca parametri, pasare multiple query: http://localhost:3000/example/crina/50?tutorial=paramstutorial&sort=byage
//raspuns in terminal:{ tutorial: 'paramstutorial', sort: 'byage' }
