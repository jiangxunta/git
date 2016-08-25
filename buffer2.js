/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
var buffer1 = new Buffer(6); // 定义长度
console.log(buffer1);
buffer1.fill(0); // 把buffer中所有元素至为0
console.log(buffer1);
// 数组里面一定是数字，范围是在[0-255]之间
var buf2 = new Buffer([1,2,3]);
console.log(buf2);
var buf3 = new Buffer([15,16,17]);
console.log(buf3);
var buf4 = new Buffer([0x15,0x16,0x17]);
console.log(buf4);
// 字符串创建
var buf5 = new Buffer("abc",'utf-8'); // 97 98 99
console.log(buf5);