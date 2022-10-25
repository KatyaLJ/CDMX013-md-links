const path = require("path");

const absolutePath = (directoryPath) =>{
    if (!path.isAbsolute(directoryPath[0])){
       return path.resolve(directoryPath[0]);
    }else {
        return directoryPath;
    }
}

module.exports= {
    absolutePath
}
    

//console.log(readingPath);
