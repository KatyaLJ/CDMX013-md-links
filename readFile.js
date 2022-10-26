const fs = require('fs');

const readFile = (directoryPath) => {
  let extractLinks = fs.readFileSync(directoryPath[0], 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
  return extractLinks;
}; 


module.exports= {
    readFile
}
/* path.extname(file) === ".md";
  });
  console.log("The following files are using .md extension: ");
console.log(mdFiles); */
