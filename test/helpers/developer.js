var faker = require( 'faker/locale/en_GB' )

exports = module.exports = {};

exports.genDeveloperAtts = function( ) {

	var developerAtts = {}

	function getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	developerAtts.username = faker.internet.userName();
	developerAtts.url = faker.internet.url();
	developerAtts.avatar_url = faker.internet.avatar();

	developerAtts.score = getRandomArbitrary( 1 , 99 );

	return developerAtts;
}
