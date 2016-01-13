module.exports = function(){
	return {
		lowercase: function(val) {
			if ('string' != typeof val) val = '';
			return val.toLowerCase();
		}
	}
}