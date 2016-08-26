/**
 * Created by v_jiangxiaoli on 2016/8/26.
 */
var fs = require('fs');
var content;
// 自己写的
function copy(src,target){
    content = fs.readFileSync(src,{encoding:'utf-8'});
    fs.writeFileSync(target,content,{encoding:'utf-8'});
}
copy('./1','./4.txt');
// copy 图片的时候 删了 {encoding:'utf-8'}

