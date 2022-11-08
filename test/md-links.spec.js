const { absolutePath } = require('../absolutePath.js');
const { extPath } = require('../extPath.js');
const { getLinks } = require('../getLinks.js');
const { readFile } = require('../readFile.js');
const { onlyValidation } = require('../onlyValidation')
const { validation } = require('../validate.js')

describe('test absolute path', () => {
  test('absolutePath es una función?', () => {
    expect(typeof absolutePath).toBe('function')
  })
  test('devuelve una ruta absoluta', () => {
    expect(typeof absolutePath('C:\Users\Katya\CDMX013-md-links\README.md')).toBe('string')
  })
  test('testeando return', () => {
   return expect( typeof absolutePath('README.md')).resolves.toBe('string');
  })
  /* test('testeando return', () => {
    return expect(absolutePath('./test/mdtest/test.md')).resolves.toBe('C:\\Users\\Laboratoria\\Desktop\\LABORATORIA\\CDMX013-md-links\\test\\mdtest\\test.md');
  }) */

})

describe('test getLinks', () => {
  test('getLinks es una función?', () => {
    expect(typeof getLinks).toBe('function')
  })
  test('lee los links del archivo', () => {
    expect(typeof getLinks('README.md')).toBe('object')
  })
})

describe('test extPath', () => {
  test('extPath es una función?', () => {
    expect(typeof extPath).toBe('function')
  })
  test('lee los links del archivo', () => {
    expect(typeof extPath('README.md')).toBe('string')
  })
})

describe('test readFile', () => {
  test('readFile es una función?', () => {
    expect(typeof readFile).toBe('function')
  })
  test('lee los links del archivo', () => {
    expect(typeof readFile('README.md')).toBe('object')
  })
})

describe('test onlyValidation', () => {
  test('onlyValidation es una función?', () => {
    expect(typeof onlyValidation).toBe('function')
  })
  test('el estatus es 200', () => {
    return expect(onlyValidation("https://nodejs.org/es/")).resolves.toBe(200);
   })
  test('el estatus es fail', () => {
    return expect(onlyValidation("https://nodejs.or")).rejects.toMatch('fail');
   });  
 })

describe('test validation', () => {
  test('validation es una función?', () => {
    expect(typeof validation).toBe('function')
  })
 /*  test('el estatus es 200', () => {
    return expect(validation("https://nodejs.org/es/")).resolves.toBeLeesThan('400');
   })
  test('el estatus es fail', () => {
    return expect(validation("https://nodejs.or")).rejects.toMatch('fail');
   }); */  
})

