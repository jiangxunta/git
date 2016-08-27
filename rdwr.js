/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var fs = require('fs');
//fs.mkdirSync('a');
fs.mkdir('a/',function(err){
    //console.log(err);
});
//mkdirSync 方法
function mkdir(p){
    p = p.split('/');
    // a a/b a/b/c
    for(var i = 0;i< p.length; p++){
        var dirPath = p.slice(0,i+1).join('/');
        fs.mkdirSync(dirPath);
    }
}
// mkdirSync 判断 是否存在
function mkdir1(p){
    p = p.split('/');
    // a a/b a/b/c
    for(var i = 0;i< p.length; p++){
        var dirPath = p.slice(0,i+1).join('/');
        var flag = fs.existsSync(dirPath);
        if (!flag) {
            fs.mkdirSync(dirPath);
        }
    }
}
// 异步
function mkdir2(p){
    var arr = p.split('/');
    // a a/b a/b/c
    var index = 0;
    make(arr[index]);
    function make(p){
        if (index >= arr.length) {
            return
        }
        fs.mkdir(p,function(){
            make(arr.slice(0,++index).join('/'));
        })
    }
}

// 迭代出a文件夹下的文件 先判断下是文件还是目录
//stat.isDirectory() 判断是不是文件夹
//fs.rmdir() 删除文件夹
//fs.unlink() 查下
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


