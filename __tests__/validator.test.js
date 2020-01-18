'use strict';

const validator = require('../lib/validator.js');
const index = require('../index.js');

describe('validator module performs basic validation of', () => {

  // TODO Complete: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;
  let strings = ['strings', 'numbers', 'arrays', 'objects', 'functions', 'booleans'];

  strings.forEach(ele => {
    it(ele, () => {
      switch(ele){
      case 'strings':
        expect(validator.isString(str)).toBeTruthy();
        break;
      case 'numbers':
        expect(validator.isString(num)).toBeFalsy();
        break;
      case 'arrays':
        expect(validator.isString(arr)).toBeFalsy();
        break;
      case 'objects':
        expect(validator.isString(obj)).toBeFalsy();
        break;
      case 'functions':
        expect(validator.isString(func)).toBeFalsy();
        break;
      case 'booleans':
        expect(validator.isString(bool)).toBeFalsy();
        break;
      default:
        console.log('Broken Test');
      }
    });
  });
});

describe('.isObj() Validator', () => {
  it('Is Person an Object', () => {
    expect(index).toBeTruthy();
  });
});

describe('Validates required properties', () => {
  it('Has All Required Properties', () => {
    expect(index.susanCheck).toBeTruthy();
  });
  it('Missing one Required Property', () => {
    expect(index.fredCheck).toBeFalsy();
  });
  it('Contains the Same Type', () => {
    expect(index.susanTypeCheck).toBeTruthy();
  });
  it('Miss-Match Types or missing required', () => {
    expect(index.fredTypeCheck).toBeFalsy();
  });
});