//crearea package.json utilizand: npm (node package manager) init
//scriem in terminal: npm init, 
// apoi package name: nodejs_tutorial, version: 1.0.0, description: tutorial
//entry point: (app10.js) ne arata ce fisier tb sa folosim pt a deschide aplicatia node
//test command: blank..m author: crina, yes
//observam aparitia fisierului package.json in sidebar, il deschidem si vedem ce am scris in el

//in continuare Installing Packages using nom - packages reprezinta aici cod reutilizabil
//pe care-l putem include in aplicatiile noastre, este un folder care include mai multe module
//deschidem in Chrome: https://www.npmjs.com/ (We're GitHub, the company behind the npm Registry and npm CLI.)
//de aici putem lua diverse pachete pe care le putem include in aplicatii
//exemplu: luam pachetul "lodash" si scriem in terminal: npm install lodash

//deschidem acum fisierul din sidebar package.json si obs. aparitia "dependencies" in json
//"lodash": "^4.17.21", dependencies ne da numele pachetului instalat si versiunea
//4(major->da o schimbare majora, incompatibila cu vers anterioara)).17(minor ->adauga noi functionalitati).21(patch->rezolva bugguri)
// ^actualizeaza minor si patch
//~actualizeaza doar patch
//mai observam dupa instalare, aparitia folderului node_modules in sidebar ce contine lodash

//lodash este un  pachet pt. Iterating arrays, objects, & strings, Manipulating & testing values, Creating composite functions

//cum folosim acest modul in aplicatia noastra?
const _ = require('lodash');

//1 reprez. start index, 4 este last index, va inlocui elementele arrayului
let example = _.fill([1,2,3,4,5],"banana",1,4);

console.log(example);
//[ 1, 'banana', 'banana', 'banana', 5 ]

//cum dezinstalam modulul lodash in terminal:  npm uninstall lodash
//observam ca dispare pachetul din folderul node_modules



