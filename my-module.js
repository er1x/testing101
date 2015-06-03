'use strict';

var hardcoreModuleOfDeath = require('./hardcoreModuleOfDeath');

function addTwo(num, otherParam) {
  console.log('processing input...');
  otherParam.superFunction();
  hardcoreModuleOfDeath.destroyWorld();
  return num + 2;
}

module.exports = addTwo;
