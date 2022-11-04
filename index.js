const path = require('path');
const chalk = require('chalk');
const { absolutePath } = require('./absolutePath');
const { extPath } = require('./extPath');
const { readFile } = require('./readFile');
const { validation } = require('./validate.js');
const { stadistics } = require('./stadistics');

const mdLinks = (routeInicial, validateP, statsP) => {
  //const directoryPath = process.argv.slice(2);
  const route = routeInicial;
  console.log(absolutePath(route));
  const validateOption = validateP;
  const statsOption = statsP;

  const extMd = (extPath(route));
  if (extMd == '.md') {
    //console.log(validateOption, statsOption);
      /* readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
      console.log(linksTodos);
    })); */
      if(validateOption== 'false' && !statsOption){
        readFile(route).then(linksAll =>
          console.log('sin opción', linksAll));
      }
      if(validateOption && !statsOption){
        readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log('index', linksTodos);
        }));
      }
      if(!validateOption && statsOption){
        stadistics(route);
      }
      if(validateOption && statsOption) {
        readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log('todos', linksTodos);
        }));
        stadistics(route);
      }
     
  } else {
    console.log("el archivo no es .md");
  };

}
mdLinks(process.argv[2]);

module.exports = {
  mdLinks
}