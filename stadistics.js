const { getLinks } = require ('./getLinks');
const { readFile } = require('./readFile');
const { validation } = require ('./validate')

const stadistics = (route) => {
    if (!validate){
        return readFile;        
    } if (validate) {
        return validation;
    } 

}