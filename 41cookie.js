/**
 * Created by 14486 on 2019/3/27.
 */
/*
* cookie
*   存储某一些信息,以便下一次访问时使用
*   cookie存储在电脑硬盘里面 以站点为单位
*   不同浏览器之间的cookie毫无关系
*   请在服务器环境下使用cookie
*/

let d = new Date().getTime();// 获取时间毫秒数

// 设置cookie 只能一条一条的设置
document.cookie = "name=罗恒; expires="+new Date(d+7*24*60*60*1000).toUTCString()+";";

// 获取cookie
let cookie = document.cookie; // name=罗恒;afei=handsome
function getCookie(attr) {
    let cookie = document.cookie;
    // () 子集 不全局匹配下可以直接得到你想要的值
    let reg = new RegExp("\\b"+attr+"=([^;]+)(;|$)");
    let val = cookie.match(reg);
    if(val){
        return val[1]; // 第一个子集就是我们要的结果
    }else{
        return false;
    }
}
// 上次访问时间
let flag = getCookie('time')
if (flag) {
    let time = new Date(flag-0).toLocaleDateString(); // 2019/10/27
    alert(`欢迎你,你上次访问本站的时间是${time}`)
} else {
    alert('欢迎你,你是第一次访问本站')
}
document.cookie = `time=${d};expires=${new Date(30*24*60*60*1000+d).toUTCString()}`;

// 封装cookie
function setCookie(json,t) {
    let d = new Date().getTime();
    for (let key in json){
        document.cookie = `${key}=${json[key]};expires=${new Date(d+t*24*60*60*1000).toUTCString()};`;
    }
}
// 删除cookie
function remove(attr) {
    let obj = {};
    obj[attr] = '';
    setCookie(obj, -1);
}