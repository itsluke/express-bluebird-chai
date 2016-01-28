'use strict';

////////////////////////////////

var chai = require( 'chai' )
  , expect = chai.expect
  , should = chai.should();

var chaiAsPromised = require( 'chai-as-promised' );
chai.use( chaiAsPromised );

var mongoose = require( 'mongoose' );
var Promise = require( 'bluebird' );

var faker = require( 'faker/locale/en_GB' );
var connection = require( '../../src/helpers/database.js' )();

////////////////////////////////

var github = require( '../../src/lib/github.js' );

describe( 'github', function () {

});