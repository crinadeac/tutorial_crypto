const express = require('express');
const route = express.Router();

//add custom Middleware function
route.use((req,res,next)=>{
    console.log('middlware being used');
    next();
})

route.get('/',(req,res)=>{
    res.send('/being hit');
});

route.get('/example',(req,res)=>{
    res.send('/example being hit');
});

module.exports = route; //exportam ruta creata

