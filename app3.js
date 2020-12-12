//여러개의 미들웨어 함수 등록하기

var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);


app.use(function(req, res, next){
    console.log('첫번째로 등록한 미들웨어 함수가 호출됨');
    req.user = 'Mike'

    next();

})

app.use(function(req, res, next){
    console.log('두번째로 등록한 미들웨어 함수가 호출됨')

    //1.Head+end로 보내는 방법
    //res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    //res.end('<h1>서버에서 응답한 결과입니다 : ' + req.user + '</h1>');

    //2.send로 한꺼번에 보내는 방법
    res.send('<h1>서버에서 응답한 결과입니다 : ' + req.user + '</h1>');
})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("익스프레스 서버를 실행함 : " + app.get('port'));
})