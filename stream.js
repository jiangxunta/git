/**
 * Created by fufan on 2016/8/27.
 */
var fs = require('fs');
// ?????????? ???????????????????? ????????????????
// flags ??????????????????????  ????????????
// start end ??????????????????
// ?????????? ??????????data???? ?????????? ?????????????? ??????????????
//highWaterMark ?????????? ????65536 = 1024*64
// ????utf-8 ??????????????

var rs = fs.createReadStream('./1',flags:'r',highWaterMark:16384,encoding:'utf-8');
//console.log(rs);
//rs.setEncoding('utf-8');// ????????????
var result = ;
rs.on('data',function(data)
    result.push(data);//????????
    //console.log(data.toString());
    //rs.pause(); ??????
    console.log(data);
);
//setTimeout(function()
//    rs.resume();  // ??????
//,1000);
// ?????????????????? ????end????
rs.on('end',function()
   console.log('??????');
    console.log(result);
    //console.log(Buffer.concat(result));
);
// ReadStream readfile ???? ???????????? 64k


var  ws = fs.createWriteStream('./1',highWaterMark:1);
// ws.write('hello'); // write end ????????????????string??b uffer
// ws.end('zfpx'); // ??????????????????????????????????????end????????????????????

var index = 0;
function eat()
    var flag = true;
    while(flag && index < 10)
        flag = ws.write(''+ index++);
        console.log(flag);
    

eat();
// ??
ws.on('drain',function()
    console.log('??????');
    eat();
);

