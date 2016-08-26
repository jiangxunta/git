/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
// fs 实现文件的读写操作
var fs = require('fs');
//readFileSync 是同步
var content = fs.readFileSync('./1',{encoding:'utf-8'});
console.log(content.toString());
// setting - encoding -设置webstorm Utf-8
// 文件编码 右下角
// 所有异步方法都要晚于同步
// readFile异步
fs.readFile('./1',{encoding:'utf-8'},function(err,data){
    console.log(data);
});


