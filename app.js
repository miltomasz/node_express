var express = require('express');
var app = express();

app.use(express.bodyParser());

function Selector(requestBody) {
  this.requestBody = requestBody;
  this.array = [];
  this.reverse = reverse; 

  function reverse(req) {
  	for(var i = 0; i < this.requestBody.checkbox.length; i++) {
  
	    switch(this.requestBody.checkbox[i]) {
		  	case '1': this.array.push({
		  							fname : requestBody.sname1,
		  							sname : requestBody.fname1
		  						}); break;
		  	case '2': this.array.push({
		  							fname : requestBody.sname2,
		  							sname : requestBody.fname2
		  						}); break;
		  	case '3': this.array.push({
		  							fname : requestBody.sname3,
		  							sname : requestBody.fname3
		  						}); break;
		  	case '4': this.array.push({
		  							fname : requestBody.sname4,
		  							sname : requestBody.fname4
		  						}); break;
		  	case '5': this.array.push({
		  							fname : requestBody.sname5,
		  							sname : requestBody.fname5
		  						});
		  }
		}

		return this.array;
  }
};

app.get('/index.html', function(req, res) {
    res.sendfile('index.html');
});

app.post('/reverse', function(req, res) {
  var array = new Selector(req.body).reverse();
  res.send(JSON.stringify(array));   
});


app.listen(3000);
console.log('Listening on port 3000...');