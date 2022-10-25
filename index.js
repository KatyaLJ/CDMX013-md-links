const path = require("path");
const { absolutePath } = require ('./absolutePath')
const { readFile } = require ('./readOneFile')

const directoryPath = process.argv.slice(2);
console.log(absolutePath(directoryPath));
console.log(readOneFile(readFile));


readOneFile.readFile
