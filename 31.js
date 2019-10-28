/**
 * Created by 14486 on 2019/3/24.
 */
// 可调整宽高的盒子
oSpan.onmousedown = function (e) {
    e = e || window.event;
    let x = e.clientX;
    let y = e.clientY;
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    let top = box.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box.style.height = height-(e.clientY-y)+"px";
        box.style.top = top + (e.clientY-y)+"px";
    };
    document.onmouseup = function (e) {
        this.onmousemove = this.onmouseup = null;
    }
};
