const fs = require('fs');


const dirPath = process.argv.slice(2);
console.log(dirPath);

const readFile = fs.readFileSync(dirPath[0], 'utf8').split('\n'); //lee el archivo, lo convierte en string, split convierte en array
console.log(readFile);

//const readFile = (dirPath) => {
    //fs.readFileSync((dirPath[0], 'utf8').split('\n'));

 //   return readFile;
//};

module.exports= {
    readFile
}
