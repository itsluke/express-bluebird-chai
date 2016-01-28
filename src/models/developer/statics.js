'use strict';

module.exports = function( mongoose ){

	return {

		findOneOrCreate: function ( condition, doc, callback ) {

		  mongoose.model( 'Developer' ).findOne( condition, function( err, result ) {
		    if ( result ) {
		      callback( err, result );
		    } else {
		      mongoose.model( 'Developer' ).create( doc, function( err, result ) {
		        callback( err, result );
		      });
		    }
		  });
		}
	};
};