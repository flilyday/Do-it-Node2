var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.port || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/process/login/:name').post(function(req, res){
    console.log('/process/login/:name 라우팅 함수에서 받음')

    var paramName = req.params.name;
    var paramId = req.query.id || req.body.id;
    var paramPassword = req.query.password || req.body.password;

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>서버에서 로그인 응답</h1>');
    res.write('<div><p>' + paramName + '</p></div>');
    res.write('<div><p>' + paramId + '</p></div>');
    res.write('<div><p>' + paramPassword + '</p></div>');
    res.end();

})

app.use('/', router)

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("express서버를 실행함 : " + app.get('port'))
})

// URL요청하는 3가지 방법과 값을 꺼내는 방법
// 1.GET : req.query.id
// 2.POST : req.body.id
// 3.GET PARAMETER : req.params.id
