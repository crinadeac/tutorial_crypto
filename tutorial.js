const sum = (num1,num2) => num1 + num2;
//expunem extern functia pt a fi utilizata in exterior
//module.exports = sum;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
//cum expunem extern mai multe obiecte/functii/constante?
/*
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
*/
//varianta 2 de expunere
module.exports = {sum : sum, PI : PI, SomeMathObject: SomeMathObject};


