//특정 폴더 오픈시키기(정적 파일 제공용)
var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.set('port', process.env.port || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//get이 아니라 post방식으로 받으려면 body-parser모듈을 깔고, 미들웨어로 등록해야 한다.


app.use(function(req, res, next){
    console.log('첫번째 미들웨어 함수가 실행됨')

    var userAgent = req.header('User-Agent')
    var paramName = req.query.name || req.body.name;
    // post방식으로 요청이 오면 query가 아닌 body에서 값을 꺼내야 한다.
    // 요청이 get으로 올지 post로 올지 확신할 수 없으면 이렇게 쓴다.

    res.send('<h3>서버에서 응답. User-Agent -> </h3>' + userAgent + '</h3><h3>Param Name -> ' + paramName + '</h3>')
})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹 서버를 실행함 : ' + app.get('port'))
})
