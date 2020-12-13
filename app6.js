//요청 파라미터 확인하기
var express = require('express')
var http = require('http')


var app = express()

app.set('port', process.env.port || 3000)

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 함수가 실행됨')

    var userAgent = req.header('User-Agent')
    var paramName = req.query.name

    res.send('<h3>서버에서 응답. User-Agent -> </h3>' + userAgent + '</h3><h3>Param Name -> ' + paramName + '</h3>')
})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹 서버를 실행함 : ' + app.get('port'))
})
