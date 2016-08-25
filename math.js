/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
function add(a,b){
    return a+b;
}
console.log('math');
// 每个js文件都是一个模块
// 模块内部的变量都是私有变量 外部其他模块无法访问

//每个模块都有个 exports = {} 对象
//向外暴漏一个方法 导出模块
exports.add = add;




