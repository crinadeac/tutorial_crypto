//EJS Templates with Express - -preluarea unui query (userQuery) prin get in template
// a template language for dynamic web pages
const express = require("express");
const app = express();
const path = require('path');
//files are served from a public directory at the root of the project,
//For example, if you have a file at public/image.jpg, it can be accessed at http://localhost:3000/image.jpg.
app.use(express.static(path.join(__dirname, 'public')));

//URL Prefix: If you want to prefix the URLs of static files with /public (or any other prefix), you would adjust the app.use line to include that prefix. For example:
//   app.use('/public', express.static(path.join(__dirname, 'static')));
//This means a file located at static/image.jpg would now be accessed via http://localhost:3000/public/image.jpg
app.set('view engine','ejs');
//we set the view of our Express application, ejs is the template used
//cream un folder views care va stoca ejs template-uri
//in views cream fisierul index.ejs

app.get('/:userQuery',(req,res)=>{
     res.render('index',{data: {userQuery: req.params.userQuery,
                                searchResults: ['book1','book2','book3'],
                                loggedIn: true,
                                username: 'Crina'
                               }}); //nu trebuie sa adaugam .ejs dupa index deoarece am setat linia 11
     //res.render('index', {data: {userQuery: "Welcome!"}});
   });

app.listen(3000);
//tastam in terminal: node app17
//testam in browser: http://localhost:3000/books
//vizualizam get-ul pt query: books pasat in path, in continutul template index.ejs din views: You searched for: books