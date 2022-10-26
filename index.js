const path = require("path");
const { absolutePath } = require ('./absolutePath');
const { extPath } = require ('./extPath');
const { readFile } = require ('./readFile');

const directoryPath = process.argv.slice(2);
console.log(absolutePath(directoryPath));

const extMd=(extPath(directoryPath));
if (extMd=='.md'){
 console.log(readFile(directoryPath)); 
}else {
  console.log("el archivo no es .md");
};



//console.log(readFile(directoryPath));