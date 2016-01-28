'use strict';

module.exports = function( mongoose ){

	module.exports.Developer = require( './developer/' )( mongoose );

};