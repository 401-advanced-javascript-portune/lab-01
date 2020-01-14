'use strict';

const validator = require('../lib/validator.js');

// describe('validator module performs basic validation of', () => {

//   // TODO Complete: Make this series of tests less repetitive ... DRY it out

//   let str = 'yes';
//   let num = 1;
//   let arr = ['a'];
//   let obj = {x:'y'};
//   let func = () => {};
//   let bool = false;
//   let strings = ['strings', 'numbers', 'arrays', 'objects', 'functions', 'booleans'];

//   strings.forEach(ele => {
//     it(ele, () => {
//       switch(ele){
//       case 'strings':
//         expect(validator.isString(str)).toBeTruthy();
//         break;
//       case 'numbers':
//         expect(validator.isString(num)).toBeFalsy();
//         break;
//       case 'arrays':
//         expect(validator.isString(arr)).toBeFalsy();
//         break;
//       case 'objects':
//         expect(validator.isString(obj)).toBeFalsy();
//         break;
//       case 'functions':
//         expect(validator.isString(func)).toBeFalsy();
//         break;
//       case 'booleans':
//         expect(validator.isString(bool)).toBeFalsy();
//         break;
//       default:
//         console.log('Broken Test');
//       }
//     })
//   })
// })

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});