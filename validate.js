const { onlyValidation } = require('./onlyValidation.js')

const validation = (links) => {

    let alllinkstoValidate = links.map(link => {
        return onlyValidation(link.href).then(respuesta => {
            link.status = respuesta
            if (respuesta < 300) {
                link.message = 'ok'
            } else {
                link.message = 'fail'
            }
            // stauts code
            return link
        }).catch(err => {
            link.status = err

            // status code
            return link
        })

    })
    return new Promise((resolve, reject) => {
        Promise.all(alllinkstoValidate).then(fin => {
            resolve(fin)
        })
    })
}

module.exports = {
    validation
}
