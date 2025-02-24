//user input validation with Express and JOI 2:15
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//instalam modulul joi: scriem in terminal: npm install joi, apoi:
const Joi = require('joi');

app.use('/public',express.static(path.join(__dirname,'')));
app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.json());  // ✅ Allows JSON request parsing
app.use(express.urlencoded({ extended: true })); // ✅ Allows form data parsing


app.get('/',(req,res)=>{
   //res.send('hello world');
   res.sendFile(path.join(__dirname,'','index.html'));
});
app.listen(3000);
app.post('/',(req,res)=>{

    let parsedBody = {};
    //req.body este array de obiecte. 
    //req.body conține un array pt.că frontend-ul folosește .serializeArray(), datele fiind trimise in index.html ca json, array serializat
    // iar Joi nu acceptă array-uri pentru validare si trebuie transf in obiect
   
    if (Array.isArray(req.body)) {  //verifica daca este array req.body
        req.body.forEach(item => {
            parsedBody[item.name] = item.value; //Acest cod adaugă dinamic fiecare pereche cheie-valoare în obiectul parsedBody.Se obtine un obiect JSON valid pentru Joi
        });
    } else {
        parsedBody = req.body;
    }
    //console.log(req.body); 
    //cream schema care formeaza niste cerinte pt email si pass
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(20).required()
    });
    const validation = schema.validate(parsedBody);

    // if (validation.error) {
    //     console.log(validation.error);
    //     res.send('An error has occurred');
    if (validation.error) {
            console.log("Validation Error Details:", validation.error.details);
            return res.status(400).json({ error: validation.error.details });
           
    } else {
        console.log(validation.value); // Successfully validated data
        res.send('Successfully posted data');
    }

});