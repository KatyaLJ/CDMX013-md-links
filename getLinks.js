const fs = require('fs');

const getLinks = (route) => {
   return fs.readFileSync(route, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);

}

//Array.set(links) */
//forEach para contar los rotos

module.exports = {
    getLinks
  }