/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var http = require('http');
var server = http.createServer(function(req,res){
//    创建一个http服务器
//    req 是客户端的请求 res 是服务器的响应
    res.write('hello');
    console.log(req.url);//得到请求的路径

});
//在本机监听8080端口
server.listen('8000');