#!/usr/bin/env node
const [,, ...args] = process.argv
const fs = require('fs');
const  { mdLinks } = require ('./index.js')

let route = args[0];
let validateOption = false;
let statsOption = false;

if(fs.existsSync(args[0]) == true) {
    
    if(args.includes('--validate')){
        validateOption = true;
    }
    if (args.includes('--stats')){
        statsOption = true;
    }
mdLinks(route, validateOption, statsOption)
}else {
    console.log('No existe el path');
}

//console.log(`Hello world ${args}`); 