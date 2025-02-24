
// Import the readline module to prompt the user
//readline is a built-in module in Node.js that allows you to read input 
//from the user and display output in the terminal.
const readline = require('readline');
// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 //generam un nr random intre 1 si 10
//math.random genereaza un nr intre [0,1), se obt intre [1,11)
 let num1 = Math.floor((Math.random()*10) + 1);
 let num2 = Math.floor((Math.random()*10) + 1);
 let answer = num1 + num2;

// Ask the user for input
 rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput)=>{
    if(parseInt(userInput)=== answer){
        rl.close();
    }else{
        rl.setPrompt('Incorrect response, please try again\n');
        rl.prompt();
        //set a line event listener (ascultator de eveniment pe linie)
        rl.on('line',(userInput)=>{
            if(parseInt(userInput)===answer)
                rl.close();
            else{
                rl.setPrompt(`Your answer of ${ userInput } is incorrect \n`);
                rl.prompt();
            }
        });
    }
    
    });
//add a listener for the 'close' event on the readline interface (rl). 
//When rl.close() is called, it triggers the callback function that logs "Correct!!!".
 rl.on('close', ()=>{
        console.log('Correct!!!');
    });

//A callback function is a function that is passed as an argument to another function 
//and is executed later, after a specific event or operation completes.