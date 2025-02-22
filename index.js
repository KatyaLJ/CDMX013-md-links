const path = require('path');
const chalk = require('chalk');
const { absolutePath } = require('./absolutePath');
const { extPath } = require('./extPath');
const { readFile } = require('./readFile');
const { validation } = require('./validate.js');
const { stadistics } = require('./stadistics');

const mdLinks = (routeInicial, validateP, statsP) => {
  //console.log(routeInicial, validateP, statsP);
  //const directoryPath = process.argv.slice(2);
  const route = absolutePath(routeInicial);
  //console.log(absolutePath(route));
  /* const validateOption = validateP;
  const statsOption = statsP; */

  const extMd = (extPath(route));
  if (extMd == '.md') {
    //console.log(validateOption, statsOption);
      /* readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
      console.log(linksTodos);
    })); */
      if(!validateP && !statsP){
        //console.log(validateOption, statsOption);
        readFile(route).then(links =>
          console.log(links));
      }
      else if(validateP && !statsP){
        readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
        }));
      }
      else if(!validateP && statsP){
        stadistics(route);
      }
      else if(validateP && statsP) {
        readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
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