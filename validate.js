const fetch = require('node-fetch');

//let toObject = {}; 

const linkValidation = (links) => {
    let toObject = {};
    return new Promise(resolve => {

        const arrayPromiseValidation = []; //array de la validacion de promesas

        links.forEach((link) => {

            fetch(link.href).then(validation => {
                // console.log();
                console.log(validation.status, validation.statusText);
            })
        .catch(error => {
                console.log(error.code);
            });
    //meter objeto
        //arrayPromiseValidation.push(validation.status, validation.statusText);
    });
    const allPromises = Promise.all(arrayPromiseValidation).then((result => {
        return result
    }))

    allPromises.then((allLinks) => {
        resolve(allLinks)
    })
})
}


module.exports = {
    linkValidation
}
