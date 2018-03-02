var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
	  it('respond with vijay hello to you', function(done) {
		      request(app).get('/').expect('vijay jenkins says CI is working now', done);
		    });
});
