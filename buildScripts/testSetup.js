// This file does not get transpiled, stick to CommonJS and ES5.

// Transpile test scripts before they run.
require('babel-register')();

// Tell Mocha to ignore .css requires that only Webpack understands.
require.extensions['.css'] = function () {};
