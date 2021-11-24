// ES5 
(function() {

})();


// Asynchronous Module Definition (AMD)

define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
});

// CommonJS format

var dep1 = require('./dep1');  
var dep2 = require('./dep2');

module.exports = function(){  
  // ...
}