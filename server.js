var express = require('express')
	, app = express()
	, fs = require('fs-extra');

const PORT = 5000;

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT, function(){
	console.log('listening on', PORT);
})