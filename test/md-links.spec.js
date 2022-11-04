const { getLinks } = require('../getLinks.js');


describe('test getLinks', () => {
  test('getLinks es una función?', () =>{
    expect (typeof getLinks).toBe('function')
  })
  test('lee los links del archivo', ()=>{
    expect (typeof getLinks('README.md')).toBe('object')
  })
})



/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */
