/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
var math1 = require('./math.js');
// 当前模块
//console.log(module);

//console.log(require.cache);//存放所有模块的缓存
// 同步的方法的结果通过函数返回调用获得
// 异步是把回调函数传进去，等结果ok了，再通知服务员 异步前面没有var 没有返回值
// 清缓存 可以执行两次打印math
delete require.cache[require.resolve('./math.js')];
var math2 = require('./math.js');
console.log(math1.add(2,3));
// require 同步
// resolve获取 一个模块的绝对路径
console.log(require.resolve('./math.js'));
// 如果mathjs里面没有导入，打印math1是空对象{}

