'use strict';

module.exports = function( mongoose ){
	return new mongoose.Schema({

		username            :   { type: String, index: true },
		url                 :   { type: String },
		avatar_url          :   { type: String },
		score 		          :   { type: Number }

	}, { timestamps: true });
};