const fs = require('fs');

const getLinks = (route) => {
   return fs.readFileSync(route, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);

}

module.exports = {
    getLinks
  }