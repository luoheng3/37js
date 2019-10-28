/**
 * Created by 14486 on 2019/3/23.
 */
// 几个宽高和位置API 直接获取数字
let a = oBox.clientWidth; // width + padding
let b = oBox.offsetWidth; // width + padding + border
let c = oBox.scrollWidth; // 盒子实际占高 绝对高

// 获取浏览器当前窗口宽高的方式
let width = document.documentElement.clientWidth;
let width1 = window.innerWidth; // 不兼容三祖宗

// 位置api
let left = oBox.offsetLeft; //元素左边距离定位父级左边的数值 没有就body
let top = oBox.offsetTop;   //距离顶部的数字 没有就body
let oP = oBox.offsetParent; //获取定位父级

// 一个小球的运动
let leftSpeed = 5;
let topSpeed =2;
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
requestAnimationFrame(fn);
function fn() {
    let cLeft = box.offsetLeft + leftSpeed ;
    let cTop = box.offsetTop + topSpeed;
    if(cLeft>=width || cLeft<=0){
        leftSpeed = -leftSpeed;
    }
    if(cTop>=height || cTop<=0){
        topSpeed = -topSpeed;
    }
    box.style.left = cLeft + "px";
    box.style.top = cTop  + "px";
    requestAnimationFrame(fn);
}
window.onresize = function () {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
};

// 多个小球的运动
let aBox = document.getElementsByClassName("box");
let length = aBox.length;
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
for (let i = 0; i < length; i++) {
    aBox[i].SpeedLeft = Math.random()*10-5;
    aBox[i].topSpeed = Math.random()*10-5;
    requestAnimationFrame(fn.bind(null,i));
    function fn(i) {
        let cLeft = aBox[i].offsetLeft + aBox[i].SpeedLeft ;
        let cTop = aBox[i].offsetTop + aBox[i].topSpeed;
        if(cLeft>=width || cLeft<=0){
            aBox[i].SpeedLeft = -aBox[i].SpeedLeft;
        }
        if(cTop>=height || cTop<=0){
            aBox[i].topSpeed = -aBox[i].topSpeed;
        }
        aBox[i].style.left = cLeft + "px";
        aBox[i].style.top = cTop  + "px";
        requestAnimationFrame(fn.bind(null,i));
    }
}

window.onresize = function () {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
}

