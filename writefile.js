/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var fs = require('fs');
fs.writeFileSync('./1','中国好声音',{encoding:'utf-8'});
console.log(fs.readFileSync('./1',{encoding:'utf-8'}));
fs.writeFile('./2','中国好声音',{encoding:'utf-8'},function(err){
//    ./2 不能写成 ./aa/2
//    报错的时候才有err 否则为null
    console.log(err);
});