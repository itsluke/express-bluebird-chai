////////////////////////////////

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var mongoose = require('mongoose');
var Promise = require( 'bluebird' );

var faker = require( 'faker/locale/en_GB' )
var connection = require( '../../helpers/database.js')();

////////////////////////////////

var Developer = mongoose.model('Developer');

var helper = require('../helpers/developer.js');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function createSimilarDevelop( base, times, cb ) {
	if ( cb === undefined ) { cb = false }
	for (var i = times ; i >= 0; i--) {

		var attrs = helper.genDeveloperAtts();
		attrs.score = attrs.score + getRandomArbitrary( -5 , 5 );

		new Developer ( attrs )
				.save( function( err, dev ){ 
					if ( cb ) { cb( dev ); }
				});
	};
}

function createDifferentDevelop( base, times, cb ) {
	if ( cb === undefined ) { cb = false }
	for (var i = times ; i >= 0; i--) {

		var attrs = helper.genDeveloperAtts();
		attrs.score = getRandomArbitrary( 0 , base - 10 );

		new Developer ( attrs )
				.save( function( err, dev ){ 
					if ( cb ) { cb( dev ); }
				});
	};
}



describe( "Developer", function(){
	
	var currentDeveloper
	var baseScore = 50;

  before( function( done ){    
  	var times = 1;
  	createSimilarDevelop( baseScore, times, function( dev ) {
  		times--;
  		if ( times === 0 ) { 
  			currentDeveloper = dev;
				done();
			}
  	})
  })

  after( function( done ){    
    //delete all the Developer records    
    Developer.remove({}, function( ) { done(); });
  });

  describe('Object', function () {
  	
  	it('should have an username', function ( ) {
  		return expect( currentDeveloper ).to.have.property( 'username' )
  							.that.is.a( 'string' );
  	});

  	it('should have an url', function ( ) {
  		return expect( currentDeveloper ).to.have.property( 'url' )
  							.that.is.a( 'string' );
  	});

  	it('should have a avatar_url', function ( ) {
  		return expect( currentDeveloper ).to.have.property( 'avatar_url' )
  							.that.is.a( 'string' );
  	});
  	it('should have a score', function ( ) {
  		return expect( currentDeveloper ).to.have.property( 'score' )
  							.that.is.a( 'number' );
  	});

  });

	// Update Tokens
  describe('#findSimilarScores', function () {

		var result;
		var similarCount = 4;
		var similarDevelopers = similarCount - 1;
		var baseScore = 50;
		var times = 10;

	  before( function( done ){    
	  	createSimilarDevelop( baseScore, similarCount, function( ){
	  		similarCount--;
	  		if ( similarCount === 0 ) { 
			  	createDifferentDevelop( baseScore, times, function( dev ){
			  		times--;
			  		if ( times === 0 ) { 
				  		dev.findSimilarScores( function( err, devs ){
				  			result = devs;
								done();
							});
				  	}
			  	});
			  };
	  	});
	  });

		it('should return ' + similarCount + ' developers' , function ( ) {
			expect( result.length ).to.equal( similarDevelopers );
		});

  });


});

