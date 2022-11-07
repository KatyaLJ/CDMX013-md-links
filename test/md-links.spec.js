const { absolutePath } = require('../absolutePath.js');
const { extPath } = require('../extPath.js');
const { getLinks } = require('../getLinks.js');
const { readFile } = require('../readFile.js');


describe('test absolute path', () => {
  test('absolutePath es una función?', () =>{
    expect (typeof absolutePath).toBe('function')
  })
  test('lee los links del archivo', ()=>{
    expect (typeof absolutePath('C:\Users\Katya\CDMX013-md-links\README.md')).toBe('string')
  })
})

describe('test getLinks', () => {
  test('getLinks es una función?', () =>{
    expect (typeof getLinks).toBe('function')
  })
  test('lee los links del archivo', ()=>{
    expect (typeof getLinks('README.md')).toBe('object')
  })
})

describe('test extPath', () => {
  test('gextPath es una función?', () =>{
    expect (typeof extPath).toBe('function')
  })
  test('lee los links del archivo', ()=>{
    expect (typeof extPath('README.md')).toBe('string')
  })
})

describe('test readFile', () => {
  test('readFile es una función?', () =>{
    expect (typeof readFile).toBe('function')
  })
  test('lee los links del archivo', ()=>{
    expect (typeof readFile('README.md')).toBe('object')
  })
})

/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */
