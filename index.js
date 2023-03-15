var express = require('express');
var app = express();
app.get('/:outlet_id/outlet', function (req, res) {
	  res.send('Hello Worl' + req.params.outlet_id);
});
app.post('/', function (req, res) {
	res.send('Hello Wold!');
});
app.listen(3000, function () {
	  console.log('server started on port 3000!');
});