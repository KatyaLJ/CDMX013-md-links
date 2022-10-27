const path = require('path');
const chalk = require('chalk');
const { absolutePath } = require ('./absolutePath');
const { extPath } = require ('./extPath');
const { readFile } = require ('./readFile');

const directoryPath = process.argv.slice(2);
const route= directoryPath[0]
console.log(absolutePath(route));

const extMd=(extPath(route));
if (extMd=='.md'){
 console.log(readFile(route)); 
}else {
  console.log("el archivo no es .md");
};

//regExp para detectar el primer corchete y quitarlo
// detectar el corchete que cierra y el primer parentesis y remplazar con una coma
//quitar el ultimo corchete

