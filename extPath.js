const path = require("path");

const extPath = (directoryPath) =>{
    return path.extname(directoryPath[0]);
     
}

module.exports= {
    extPath
}
