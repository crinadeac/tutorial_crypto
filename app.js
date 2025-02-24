//tutorial node.js https://www.youtube.com/watch?v=RLtyhwFtXQA
const tutorial = require('./tutorial');
//console.log(tutorial);
//nu mai punem si extensia in fisierul de mai sus
//sum(1,1);
//console.log(tutorial(1,1));
//se apeleaza functia
console.log(tutorial.sum(1,2));
//se apeleaza constanta
console.log(tutorial.PI);
//se apeleaza obiectul
console.log(new tutorial.SomeMathObject());

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
//add listener
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1 + num2);
});
//primul parametru este listener, 
//al doilea este functia care dorim sa se execute
//atunci cand intervine evenimentul 'tutorial'

//emitem evenimentul  tutorial event
//eventEmitter.emit('tutorial');//cand functia n are param
//trecem si parametrii: 1,2
eventEmitter.emit('tutorial',1,4);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let crina = new Person('Crina');

pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
});
crina.on('name',()=>{
    console.log('my name is '+ crina.name)
});


pedro.emit('name');
crina.emit('name');
