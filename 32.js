/**
 * Created by 14486 on 2019/3/25.
 *  默认事件 阻止默认事件
 */
document.oncontextmenu = function (e) {
    // 右键菜单事件;
    e = e || window.event;
    e.preventDefault(); // 阻止默认事件   不兼容三祖宗
    return false; // IE阻止默认事件的方式
    // 兼容
    //  e.preventDefault && e.preventDefault();
    //  some code....
    //  return false
};
// 滚轮事件 不一定要有滚动条 任何元素上都有滚轮事件
oBox.onmousewheel = function (e) {
    // IE和主流浏览器
    e = e || window.event;
    // e.wheelDelta 滚动方向 往下-120 推是正值
    let num = e.wheelDelta;

};
// 火狐
oBox.addEventListener("DOMMouseScroll",function (e) {
    e = e || window.event;
    // e.detail 滚轮方向
    let d = e.detail; // 3的倍数 手心是正的,
});
// 滚轮事件 兼容所有浏览器的
function addWheelEvent( obj , eFn ){
 //判断IE8还是非IE8
 if ( document.addEventListener ){
    //火狐还是非火狐
    var oDiv = document.createElement("div");
 if ( oDiv.onmousewheel === null ){
    obj.addEventListener("mousewheel" , fn , false);
 }else{
    obj.addEventListener("DOMMouseScroll" , fn , false);
 }
 }else{
    obj.attachEvent("onmousewheel" , fn);
 }
 function fn(e){
     e = e || window.event;
     var d = e.wheelDelta/120 || -e.detail/3;
     eFn.call(obj , e , d);
 }
 }
// 作业 自定义滚动条
// 事件委托  个数越多事件委托的优势越明显
// e.target 事件源
// IE8 e.srcElement;




// 原生JS ES6 node vue angular react h5
// webgl ar
// 递归
function fn(n) {
    let s;
    if(n<=2){
        return 1; // 归
    }
    return s = fn(n-1)+fn(n-2); // 递归
}
