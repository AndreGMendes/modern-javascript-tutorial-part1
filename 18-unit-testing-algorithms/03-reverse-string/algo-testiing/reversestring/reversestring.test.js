const {reverseString, stringToBinary} = require('./reversestring');

describe('Reverse String', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('bye')).toEqual('eyb');
    expect(reverseString('wow')).toEqual('wow');
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });


  // it('should convert a String to Binary and add a dash each 8 group of digits', () => {
  //   expect(stringToBinary('Hello')).toEqual('01001000-01100101-01101100-01101100-01101111')

  // });


});

describe ('String Conversion Operations', () => {

  it('should convert a String to Binary and add a dash each 8 group of digits', () => {
    expect(stringToBinary('Hello')).toEqual('01001000-01100101-01101100-01101100-01101111')
  
  });
  
})
