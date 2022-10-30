const path = require('path');
const chalk = require('chalk');
const { absolutePath } = require('./absolutePath');
const { extPath } = require('./extPath');
const { readFile } = require('./readFile');
const { linkValidation } = require('./validate.js')

const mdLinks = (routeInicial) => {
  //const directoryPath = process.argv.slice(2);
  const route = routeInicial;
  console.log(absolutePath(route));

  const extMd = (extPath(route));
  if (extMd == '.md') {
    readFile(route).then(linksAll => linkValidation(linksAll).then(linksTodos => {
      console.log("validaciones de links", linksTodos );
    }));
      
    // console.log(readFile(route)); 
  } else {
    console.log("el archivo no es .md");
  };

}
mdLinks(process.argv[2]);
