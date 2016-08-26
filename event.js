/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var Et = require('events');
var util = require('util');
//var events = new Et();
// 给对象events 注册事件 当click事件发生的时候执行对应的回调函数
//events.addListener('click',function(){
//    console.log('click');
//});
//// 发射click事件
//events.emit('click');
function Girl(){

}
util.inherits(Girl,Et);
var girl = new Girl();
console.log(girl);
// on  addLister once removeLister移除事件  removeAllListers移除所有事件
girl.on('hungry',function(){
   console.log('吃');
});
girl.on('sad',function(things){
    console.log('逛'+things);
});
girl.emit('hungry');
girl.emit('sad','宝贝');