const { getLinks } = require ('./getLinks');
const { readFile } = require('./readFile');
const { validation } = require ('./validate')

const stadistics = (route) => {
    let canSet = new Set(getLinks(route));
    readFile(route).then(linksAll => validation(linksAll).then(linksTodos => {
    
     let brokenLinks = 0;
    linksTodos.forEach(link => {
        if(link.message == 'fail' || link.status == 'fail')
        brokenLinks =+ 1;
    })
    console.log('Total: ', linksAll.length);
    console.log('Unique: ', canSet.size);
    console.log('Broken: ', brokenLinks);
    return;
    }))
}

module.exports = {
    stadistics
}