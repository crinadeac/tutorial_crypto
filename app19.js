//working with Express router: separates routes into different files
const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
//cream folderul routes si in el fisierul people.js where we store people routes

const people = require('./routes/people');  //people.js
const { array } = require('joi');

app.use('/people',people);
app.listen(3000);

//tastam in browser: http://localhost:3000/people   obtinem afisarea: /being hit conform routes/people
// apoi http://localhost:3000/people/example
