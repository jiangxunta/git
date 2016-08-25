/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
var Person = require('./person');
console.log(Person);
var p = new Person('张三');
p.say();
// 获取引用类型的话必须用 module.exports = Person;
//包和npm
