module.exports = function ( mongoose ) {
	
	return {
		findSimilarScores: function ( cb ){
			var _dev = this;
			return this.model('Developer').find({ 'score':  { 
					'$gte': _dev.score - 5  , 
					'$lt': _dev.score + 5 
				}
			}, cb );
		}
	}
}