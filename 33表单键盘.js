/**
 * Created by 14486 on 2019/3/26.
 * BOM 浏览器对象模型
 *      1: window.open("https://www.baidu.com","_self"); blank 空白页
 *      2: window.close();
 *      3: window.onresize = fn; 当窗口发生改变的时候
 *          获取窗口的宽高
 *              document.documentElement.clientWidth;
 *              document.documentElement.clientHeight;
 *      4: window.onload = fn;   当页面加载完毕后执行
 *      5: window.onscroll = fn; 当窗口发生滚动的时候
 *      6: 获取滚动高度
 *          document.documentElement.scrollTop 获取页面的滚动高度;
 *          document.documentElement.scrollLeft 获取页面的滚动宽度;
 *      7: window.location 对象
 *          .href  获取路径字符串 http://localhost:63342/javascript/1.html
 *          .hash  #后面的内容  #...
 *          .host  localhost:8080
 *          .hostname localhost
 *          .port  8080
 *          .search ?后面的内容 ?...
 *      8: window.navigator 浏览器信息 .userAgent浏览器版本信息
 */
/*
* 关于表单事件
*   oInp.onfocus = fn 获得焦点的时候触发
*   oInp.onblur = fn  失去焦点的时候触发
*       可以获得焦点的元素有
*           window document a input  textarea  select 所有表单
*   oInp.focus(); 手动让元素获得焦点
*   oInp.blur();  失去焦点
*   form对象.submit(); 手动提交
*   oInp.onchange = fn; 当表单控件内容发生改变的时候触发(失去焦点的时候检测改变与否)
*       单选按钮 type = radio
*       多选按钮 type = checkbox
*       select>option 下拉选项卡
*   oInp.oninput = fn 随时检测
*   在表单里面 可以直接通过 name名字的形式获取元素 form.[name]
*/
/*
* 键盘事件
*    onkeydown
*       能获得焦点的元素才有键盘事件 会触发多次 任何键都可以触发
 *   onkeyup
 *      抬起
 *   onkeypress
 *      区别 只响应能键入内容的键 + enter
 *   e.keyCode
 *      键值
 *   两个键按下
 *      shift Ctrl Alt 键可以直接 e.shiftKey
 *   onmousedown
 *      e.button 判断是左键 中建
 *          左键0 中建2 右键1
 *      e.button ie8 左键1 右键2 左右一起3 中建4
 *      */

// 作业 俄罗斯方块 贪吃蛇
document.onclick = function () {
    window.open("https://www.baidu.com","blank");
};

// 斜向运动
var oBox = document.getElementById("box");

var step = 1;

document.onkeydown = function (ev) {
    ev = ev || window.event;
    var keyCode = ev.keyCode;
    switch (keyCode){
        case 37: //左
            if ( oBox.m37 === undefined ){
                oBox.m37 = setInterval(function () {
                    oBox.style.left = oBox.offsetLeft - step + 'px';
                },10);
            }
            break;
        case 38: //上
            if ( oBox.m38 === undefined ){
                oBox.m38 = setInterval(function () {
                    oBox.style.top = oBox.offsetTop - step + 'px';
                },10);
            }
            break;
        case 39: //右
            if ( oBox.m39 === undefined ){
                oBox.m39 = setInterval(function () {
                    oBox.style.left = oBox.offsetLeft + step + 'px';
                },10);
            }
            break;
        case 40: //下
            if ( oBox.m40 === undefined ){
                oBox.m40 = setInterval(function () {
                    oBox.style.top = oBox.offsetTop + step + 'px';
                },10);
            }
            break;
    }
};

document.onkeyup = function (ev) {
    ev = ev || window.event;
    switch (ev.keyCode){
        case 37:
            clearInterval(oBox.m37);
            oBox.m37 = undefined;
            break;
        case 38:
            clearInterval(oBox.m38);
            oBox.m38 = undefined;
            break;
        case 39:
            clearInterval(oBox.m39);
            oBox.m39 = undefined;
            break;
        case 40:
            clearInterval(oBox.m40);
            oBox.m40 = undefined;
            break;
    }
}
