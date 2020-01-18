'use strict';
const validator = require('./lib/validator.js');

const personRules = {
  fields: {
    id: {type: 'string', required: true},
    name: {type: 'string', required: true},
    age: {type: 'number', required: true},
    children: { type: 'array', valueType: 'string'},
  },
};

const susan = {
  id:'123-45-6789',
  name:'Susan McDeveloperson',
  age: 37,
  children:[],
};

const fred = {
  id:38,
  name:'Freddy McCoder',
  children:[],
};

const susanCheck = validator.isValid(susan, personRules);
const fredCheck = validator.isValid(fred, personRules);
const susanTypeCheck = validator.isType(susan, personRules);
const fredTypeCheck = validator.isType(fred, personRules);
module.exports = {susanCheck, fredCheck, susanTypeCheck, fredTypeCheck};