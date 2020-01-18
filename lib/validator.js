let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * Test for required against rules
 * If all required are present it is valid, else if missing then not valid
 * @param input
 * @param rules
 * @returns {boolean}
 */

validator.isValid = (input, rules) => {
  let objRules = rules.fields;
  let keys = Object.keys(objRules);
  let inKeys = Object.keys(input);
  let test = true;
  keys.forEach(ele => {
    let objReq = objRules[ele].required;
    let inProp = inKeys.includes(ele);
    if (objReq && inProp){
      return test = true;
    } else if (objReq === false || inProp === false) {
      return test = false;
    }
    return test;
  });
  return test;
};

/**
 * Checking types against rules
 * Checks Required Param
 * Check if object contains property
 * Check if type is same as required
 * @param input
 * @return {boolean}
 */

validator.isType = (input, rules) => {
  let objRules = rules.fields;
  let keys = Object.keys(objRules);
  let inKeys = Object.keys(input);
  let test = true;
  keys.forEach(ele => {
    let objReq = objRules[ele].required;
    let inType = typeof input[ele];
    let ruleType = objRules[ele].type;
    let inHasProp = inKeys.includes(ele);
    if (objReq === true){
      if(inHasProp && inType && ruleType){
        return test = true;
      } else {return test = false;}
    }
    return test;
  });
  return test;
};

/**
 * Is this an Object?
 * @param input
 * @returns {boolean}
 */

validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */

validator.isString = (input) => {
  return typeof input === 'string';
};
