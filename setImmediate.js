/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
setTimeout(function(){
    console.log('a');
},2000);
// 把参数函数放在下一个事件环中执行 类似于 setTimeout 设置0
setImmediate(function(){
    console.log('setImmediate');
});