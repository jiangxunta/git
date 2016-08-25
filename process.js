/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
console.log(process.cwd());//d:\git
//修改当前工作路径 chdir
process.chdir('..'); // 返回上一级目录
console.log(process.cwd());//打印出路径 d:\
console.log(process.memoryUsage());
/*
* { rss: 17,182,720,//常驻内存 17m
* heapTotal: 9751808,// 堆内存
* heapUsed: 3988912 }//堆已经使用的总内存
* */
//查看用多少内存 { rss: 17182720, heapTotal: 9751808, heapUsed: 3988912 }
// 放在当前任务列表的末尾 先执行
process.nextTick(function(){
    console.log('nextTick');
});
var i = 0;
function next(){
    process.nextTick(function(){
        console.log('nextTick' + i++);
        next();
    });
}