const fs = require('fs');

let cleanHref = "";
let cleanText = "";
//let obj = {};
//let resultado = {};
//let newResult = {};

const readFile = (route) => {
  let extractLinks = fs.readFileSync(route, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
  let resultado = extractLinks.map((link) => {

    let hrefS = link.match(/\((https?:\/\/.+)\)/gi);
    cleanHref = hrefS.toString().replace("(", "").replace(")", "");

    let textS = link.match(/\[(.+)\]/gi);
    cleanText = textS.toString().replace("[", "").replace("]", "");

    let toObject = {
      href: cleanHref,
      text: cleanText,
      file: route
    };
    //newResult.push(obj);
    return toObject;
    //console.log("obj", obj);

  });
  return new Promise(resolve => {
    resolve(resultado);
    //console.log(resultado)
  })

  //console.log(resultado);
  //return extractLinks;
  //return resultado
};


module.exports = {
  readFile
}
