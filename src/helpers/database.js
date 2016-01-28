'use strict';

var mongoose = require( 'mongoose' );

/**
 * Connects to mongodb with mongoose and load all models
 * @return {Object} returns mongoose connection
 */
module.exports = function () {
	// checks for an active connection
	if ( mongoose.connection.readyState === 0 ){

		// connects to database
		var connection = mongoose.connect( 'mongodb://localhost/express-bluebird-chai' );
		// requires mongoose dir index.js to instigate models
		require( '../models/' )( mongoose );

		// returns the connection
		return connection;

	}
};
