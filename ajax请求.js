/**
 * Created by fufan on 2016/8/28.
 */
function getServerDate(){
//    ����ajax����
//    ���� xhr
    var xhr = new XMLHttpRequest();
//    ��
    xhr.open('GET','/clock',true);
    xhr.onreadystatechange = function(){
        clock.innerHTML = xhr.response;
    }
    xhr.send();
}
// getServerDate()
//setInterval(getServerDate,1000);