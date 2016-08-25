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
var buf5 = new Buffer("abc",'utf-8'); // 97 98 99 <Buffer 61 62 63>
console.log(buf5);
console.log('珠'.charCodeAt(0));
console.log((20005).toString(16));//4e25
/*
* 得到珠的Unicode码 转成二进制
* 依次从后往前填入1110xxxx 10xxxxxx 10xxxxxx
* 把结果转换成 16进制
*
* */

 // buffer 常用的方法
var buf11 = new Buffer("珠");
var buf22 = new Buffer("峰");
console.log(Buffer.concat([buf11,buf22],3).toString('utf8'));
var result = new Buffer(6);
buf11.copy(result,0,0,3);
buf22.copy(result,3,0,3);
console.log(result.toString());
console.log(Buffer.isBuffer(buf11));
var lg = '一定成功';
console.log(Buffer.byteLength(lg));
console.log(Buffer.byteLength(lg,'ascii'));
