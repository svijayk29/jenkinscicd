var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
	  res.send('vijay jenkins says hello to you');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
