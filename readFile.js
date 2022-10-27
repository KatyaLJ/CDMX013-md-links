const fs = require('fs');

const readFile = (route) => {
  let extractLinks = fs.readFileSync(route, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
  let resultado= extractLinks.map( (link)=> {
    let hrefS = link.match(/\((https?:\/\/.+)\)/gi);
    let textS = link.match(/\[(.+)\]/gi);
      let obj= {
        href: hrefS,
        text: textS,
        file: route
      }
 return obj;
  });
  //console.log(resultado);
  //return extractLinks;
  return resultado
}; 


module.exports= {
    readFile
}
/* path.extname(file) === ".md";
  });
  console.log("The following files are using .md extension: ");
console.log(mdFiles); */
