var expect = require( "chai" ).expect;
var example = require( "../lib/example.js" );
 
describe( "Examples", function(){

	 describe( "#parse()", function(){

       it( "should parse long formed tags", function(){

           var args = [ "--depth=4", "--hello=world" ];

           var results = example.parse(args);
 
           expect(results).to.have.a.property( "depth", 4);
           expect(results).to.have.a.property( "hello", "world" );
       });
   });
});