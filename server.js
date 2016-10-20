var express = require('express')
	, app = express()
	, fs = require('fs-extra')
	, serveIndex = require('serve-index');;

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname));
// app.use('node_modules', express.static(__dirname + '/node_modules'));
// app.use('/public', express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public'));
app.use('/public', serveIndex(__dirname + '/public'));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT, function(){
	console.log('listening on', PORT);
})


