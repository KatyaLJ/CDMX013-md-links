const fs = require('fs');
const path = require("path");

const directoryPath = process.argv.slice(2);
console.log(directoryPath);

//Abre un directorio
const readingDir = fs.readdirSync(directoryPath[0]);
console.log(readingDir);

//Filtra los archivos .md de un directorio
const mdFiles = readingDir.filter(function (file) {
    return path.extname(file) === ".md";
  });
  console.log("The following files are using .md extension: ");
console.log(mdFiles);

