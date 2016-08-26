/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var fs = require('fs');
//fs.mkdirSync('a');
fs.mkdir('a/',function(err){
    //console.log(err);
});
// 迭代出a文件夹下的文件 先判断下是文件还是目录
fs.readdir('./a',function(err,files){
    //console.log(files);
    files.forEach(function(file){
        fs.stat('./a/' + file,function(err,stat){
            if(stat.isFile()){
                fs.readFile('./a/' + file,function(err,data){
                    console.log(data.toString());
                });
            } else {
                console.log('目录');
            }
        });
    });
});
/*
查看文件的信息 获得文件的详情描述
mtime 只要修改了就会变
ctime 只有内容改了，才有改变
 */
fs.stat('./a',function(err,stat){
    //console.log(stat);
});
// 判断一个文件是否存在
fs.exists('./a',function(exists){
    console.log(exists);//true
    //console.log(arguments);// {'0',true}
});
// 根据相对路径获取绝对路径
//console.log(__dirname + './a');
// 路径的处理
var path =require('path');
// 多个部分路径拼接一个最终的路径
console.log(path.join(__dirname,'a','b','c'));
// windows 下是\  linux 下是/
// 在命令中执行 用node -e "console.log(require('path').join(__dirname,'a','b','c'))"
// resolve 得到绝对路劲
console.log(path.resolve('a','b','..','..'));
// basename 获取文件名
console.log(path.basename(__filename));
// 获取文件的类型名
console.log(path.extname(__filename));
console.log(path.delimiter);// 打印;

console.log(path.sep);// 打印\

