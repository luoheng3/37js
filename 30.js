/**
 * Created by 14486 on 2019/3/24.
 */
/*
* event事件对象
*   1:随着事件产生的
*   2: 存储着事件的一些信息,鼠标位置等等*/
document.onclick = function (ev) {
    ev = ev || window.event;
    let x = ev.clientX; // 鼠标距离窗口左边的距离
    let y = ev.clientY; // 鼠标距离窗口顶部的距离
    let px = ev.pageX;  // 鼠标距离文档左边的距离 三祖宗不兼容 ev.clientX + 窗口的滚动距离
    let py = ev.pageY;  // 鼠标距离文档顶部的距离 三祖宗不兼容
    let l = ev.clientX + document.documentElement.scrollLeft;//窗口的滚动距离
    let t = ev.clientY + document.documentElement.scrollTop;
};
document.onscroll = function (ev) {
    ev = ev || window.event;
    console.log(document.documentElement.scrollTop);
};
// 盒子的拖拽
box.onmousedown = function (e) {
    e = e || window.event;
    let left = e.clientX-this.offsetLeft;
    let top = e.clientY-this.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box.style.cssText = `left:${e.clientX-left}px;top:${e.clientY-top}px;`
    };
    document.onmouseup = function () {
        this.onmousemove = this.onmouseup = null;
    }
};
// 冒泡问题
document.onclick = function (e) {
    e = e || window.event;
    // 阻止冒泡
    e.cancelBubble = true; // 不符合w3c规范
    e.stopPropagation(); // 符合规范
};

// 事件绑定 addEventListener 不会覆盖 以前的事件注册会覆盖
oBox.addEventListener("click",function () {
    // 主流的 绑定事件
    // 捕获 true 的过程是父元素往子元素执行的过程  也就是先执行父元素的事件
    // 不捕获的过程是子元素向父元素冒泡的过程
    // 当捕获与不捕获共存的时候  优先执行捕获事件
    // 事件源 捕获事件与不捕获事件是要看书写顺序的
    // 默认false
},false);
// IE
oBox.attachEvent("onclick",function () {

},true);

// 事件解绑
oBox.removeEventListener("click",fn);
// IE
oBox.detachEvent("onclick",fn);

// 绑定事件的兼容
function addEvent(obj,type,fn) {
    function f() {
        let arg1 = arguments;
        fn.apply(el,arg1);
    }
    if(obj.attachEvent){
        obj.attachEvent("on"+type,f
            // 1: fn.call(this); //解决this指向问题
            // 2: fn.apply(this,args) //解决传参问题
);
    }else{
        obj.addEventListener(type,function () {
            // 1: fn.call(obj); //解决this指向问题
            // 2: fn.apply(obj,args) //解决传参问题
        });
    }
    return f;
}
// 问题1 this指向的问题
// 解绑事件的兼容

