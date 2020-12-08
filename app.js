var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.ports || 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'))
})


