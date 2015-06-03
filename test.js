'use strict';


var chai       = require('chai');
var expect     = chai.expect;
var sinon      = require('sinon');
var proxyquire = require('proxyquire')


var harmless = {
  destroyWorld: function(){
    console.log('no way');
  }
};
var myModule = proxyquire('./my-module', { './hardcoreModuleOfDeath': harmless });

describe('My Module', function() {

  it('should add 2 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule(3, dontCare);

    expect(value).to.be.equal(5);
    expect(dontCare.superFunction.called).to.be.true;
  });

});