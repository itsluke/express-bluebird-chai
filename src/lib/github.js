'use strict';

var GitHubApi = require( 'github' );
var Promise = require( 'bluebird' );

exports = module.exports = { };

// init a new github api connection
var github = new GitHubApi({
	version: '3.0.0'
});

/**
 * Accesses the github api and retrieves a specific user
 * @param  { Object } query - a query to pass to the api
 * @param  { Object } _mockedResponse - a mocked response for testing
 * @return { Promise } which resolves to a user Object
 */
exports.getUser = function ( username, _mockedResponse ) {

	// Creates a new bluebird.js Promise
	return new Promise(  function ( resolve, reject ) {

		var respond = function ( err, res ) {
			// if error occurs reject Promise
			if ( err ) { reject( err ); }
			else {
				console.log( 'user', res.items[ 0 ]);
				resolve( res.items[ 0 ]);
			}
		};

		if( _mockedResponse !== undefined ){ respond( null, _mockedResponse ); }
		// https://developer.github.com/v3/search/
		else { github.search.users({ q: username }, respond ); }

	});
};


exports.createDeveloperFromResponse = function ( response ) {

	// Creates a new bluebird.js Promise
	return new Promise( function ( resolve, reject ) {



	});
};