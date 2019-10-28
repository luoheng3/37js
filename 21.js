/**
 * Created by 14486 on 2019/3/21.
 */

// 图片的滑门效果
let oImg = document.getElementsByClassName("img")[0],
    num = 0;
let t1 = setInterval(function () {
    num+=1;
    if(num>=204){
        oImg.style.height = "204px";
        clearInterval(t1);
    }else{
        oImg.style.height = num + "px";
    }
},1000/60);

/*
* requestAnimationFrame() cancelAnimationFrame()
*   和setTimeout差不多 不兼容IE8及其以下
*   刷新频率与浏览器保持一致,主要用于做动画
*   离开当前页面之后,暂停运行*/
let t2 = requestAnimationFrame(fn);
function fn() {
    alert(1);
    // some code
    requestAnimationFrame(fn);
}
document.onclick = function () {
    cancelAnimationFrame(t2);
};
// 兼容
window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn,1000/60);
};
window.cancelAnimationFrame = window.cancelAnimationFrame || function (t) {
        clearTimeout(t);
    };
// 1: 获取元素的最终样式
    let width1 = getComputedStyle(oBox).width; // 谷歌浏览器 200px;
    let width = oBox.currentStyle.width; //IE浏览器
// 兼容
function getStyle(obj) {
    return obj.currentStyle || getComputedStyle(obj);
}
// 2: 日期对象

let date = new Date(); // 获取系统当前时间
// 设置某个时间点;
let e1 = new Date(2017/3/12);
let e2 = new Date("323523 从1970年开始的毫秒数");

let y = date.getFullYear(); // 获取年
let m = date.getMonth() + 1; // 获取月
let d = date.getDate(); // 获取日
let h = date.getHours(); // 获取小时
let mm = date.getMinutes(); // 获取分钟
let ss = date.getSeconds(); // 获取秒
let t = date.getDay();     // 返回今天星期几, 星期天对应数字0