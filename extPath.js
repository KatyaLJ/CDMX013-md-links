const path = require('path');

const extPath = (directoryPath) =>{
    return path.extname(directoryPath);
     
}

module.exports= {
    extPath
}
