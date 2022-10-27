const path = require('path');

const absolutePath = (directoryPath) =>{
    if (!path.isAbsolute(directoryPath)){
       return path.resolve(directoryPath);
    }else {
        return directoryPath;
    }
}

module.exports= {
    absolutePath
}
    

//console.log(readingPath);
