/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
//console.log(Buffer);
var sum = 0;
for(var i=0;i<8;i++){
    sum += Math.pow(2,i);
}
console.log(sum);
console.log(Math.pow(2,8)-1);
// 打印都是255 第二个是+1，变成0进以为 100000000
// parseInt 把任何进制转换成十进制
parseInt('11',2);
// 二进制转换成十进制
parseInt('77',8);
// 八进制转换成十进制
// toString 把十进制转换成任意进制
(255).toString(2);
