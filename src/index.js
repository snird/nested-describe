/**
 * Helper to create hierarchical describe statements for a project's test suites.
 * @type {exports}
 */

var isArray = require('lodash.isarray');
var isEmpty = require('lodash.isempty');
var isString = require('lodash.isstring');


var makeNestedDescribe = function(pathBits, describeFn) {
  var pathBit = pathBits.shift();
  if (isEmpty(pathBits)) {
    return describe(pathBit, describeFn);
  } else {
    return describe(pathBit, function() {
      makeNestedDescribe(pathBits, describeFn);
    });
  }
};


var nestedDescribe = function(path, testFn) {
  if (!isArray(path) && !isString(path)) {
    throw new Error('Unrecognized object supplied for describe path');
  }

  var pathBits = isArray(path) ? path : path.split('.');
  makeNestedDescribe(pathBits, testFn);
};


module.exports = nestedDescribe;
