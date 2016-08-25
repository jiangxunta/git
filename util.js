/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
var util = require('util'); // require node 亲生的
//console.log(util);
// inherits 继承
function Parent(){
    this.name = 'parent';
};
Parent.prototype.say = function(){
   console.log(this.name);
};
function Child(){
    this.name = 'child';
};
util.inherits(Child,Parent);
// 子类可以继承原型上的方法
//Child.prototype = new Parent();
var child = new Child();
child.say();
// inspect 把对象转换成字符串
console.log(util.inspect(Child));
// 对一个对象的操作是否显示等
var obj = {
    name : 1,
    drink: function () {
        console.log('drink');
    }
};
//showHidden 显示更多隐藏信息
//depth 深度
//colors 增加颜色
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true}));
//对象定义属性
Object.defineProperty(obj,'age',{
    enumerable:false, //是否枚举
    value:100,        //属性的值
    configurable:false, //是否可配置 是否可删除此属性
    writable:false     //是否可写
});
obj.age = 1000;
//让不可枚举的不显示
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true}));

//util.inspect();

//检测数据类型
console.log(util.isArray([]));
console.log(util.isRegExp(/\d+$/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));