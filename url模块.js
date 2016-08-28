/**
 * Created by fufan on 2016/8/28.
 */
var url = require('url');
//url 模块是node核心模块 用来解析路径
var str = 'https://www.baidu.com/s?wd=%E4%B9%A6&rsv_spt=1&rsv_iqid=0x9a27c8790004ff50&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&rqlang=&tn=baiduhome_pg';
var urlObj = url.parse(str,true);//true 将query 转换成对象
//用来解析url成对象
console.log(urlObj);
/*Url {
 protocol: 'https:',
 slashes: true,
 auth: null,
 host: 'www.baidu.com',
 port: null,
 hostname: 'www.baidu.com',
 hash: null,
 search: '?wd=%E4%B9%A6&rsv_spt=1&rsv_iqid=0x9a27c8790004ff50&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&rqlang=&tn=baiduhome_pg',
 query:
 { wd: '书',
 rsv_spt: '1',
 rsv_iqid: '0x9a27c8790004ff50',
 issp: '1',
 f: '8',
 rsv_bp: '0',
 rsv_idx: '2',
 ie: 'utf-8',
 rqlang: '',
 tn: 'baiduhome_pg' },
 pathname: '/s',
 path: '/s?wd=%E4%B9%A6&rsv_spt=1&rsv_iqid=0x9a27c8790004ff50&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&rqlang=&tn=baiduhome_pg',
 href: 'https://www.baidu.com/s?wd=%E4%B9%A6&rsv_spt=1&rsv_iqid=0x9a27c8790004ff50&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&rqlang=&tn=baiduhome_pg' }
 */
console.log(urlObj.pathname);
console.log(urlObj.pathname.slice(1));
console.log(urlObj.query.f);

// 第三方包  npm install mime type.json
// require('mime').lookeup(pathname) mime.js 包里面

