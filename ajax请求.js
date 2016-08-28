/**
 * Created by fufan on 2016/8/28.
 */
function getServerDate(){
//    发送ajax请求
//    创建 xhr
    var xhr = new XMLHttpRequest();
//    打开
    xhr.open('GET','/clock',true);
    xhr.onreadystatechange = function(){
        clock.innerHTML = xhr.response;
    }
    xhr.send();
}
// getServerDate()
//setInterval(getServerDate,1000);