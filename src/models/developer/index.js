'use strict';

var helpers = require( '../../helpers/models.js' )();

module.exports = function( mongoose ){
	// Schema
	var schema = require( './schema.js' )( mongoose );

	// Setters
	schema.path( 'username' ).set( helpers.lowercase );

	// Class Methods
	schema.statics = require( './statics.js' )( mongoose );

	// Instance Methods
	schema.methods = require( './methods.js' )( mongoose );

	return mongoose.model( 'Developer', schema );
};