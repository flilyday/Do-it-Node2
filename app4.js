
var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.port || 3000);

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 함수가 실행됨')
    next()
})

app.use(function(req, res, next){
    console.log('두번째 미들웨어 함수가 실행됨')
    var person = {name : 'sosi', age : 20};
    res.send(person);

//    var personStr = JSON.stringfy(person);
//    res.send(personStr);

    //데이터만 보내고자 하는 경우
    res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
    res.write(person);
    res.end();

})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("익스프레스 서버를 실행함 : " + app.get('port'))
})