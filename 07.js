/**
 * Created by 14486 on 2019/3/17.
 */
// 获取元素之间的区别
// 静态获取  获取之后不会改变
let oBox = document.getElementById("box");
let oBox = document.querySelector("#box");
let oBox = document.querySelectorAll("#box");

// 其余都是动态获取
// 动态转静态
let oBox = document.getElementsByClassName("box")[0];
let x = document.getElementsByClassName("box");
// 如果不加[0], x每用一次都会重新获取一遍

/*
* 特殊元素的获取  body head title 三个唯一的元素
*   document.body
*   document.title = "罗恒";
*   document.head
*   document.documentElement(html)
*/
// 问题: 回流和重绘  尽量减少页面的重绘  display:none v:hidden

// for循环
for (let i = 0; i < 100; i++) {
    alert(1);
    // 执行顺序
    // ①  let i = 0;
    // ②  i < 100;
    // ③  alert(1)
    // ④  迭代 i++
}
// while 循环
let j = 0;
while ( j < 3 ) {
    // do someThing
    j++;
}
// do while 循环 无论如何都会执行一次
let k = 0;
do{
    alert(2);
    k++;
}while(k < 6)

// ws中 选中同一变量 用shift+f6
/*
* for循环 注册事件 要用到他们的序号的解决方式
*   1: 添加自定义属性 arr[i].i = i;
*   2: 使用let声明
*   3: 使用闭包;
*/
// 作业 鼠标移动到谁身上 显示 对应内容 也可以用hover来做
let aLi = document.querySelectorAll("#left ul li"),
    aRi = document.querySelectorAll("#right ul li"),
    length = aLi.length,
    flag = 0;
for (let i = 0; i < length; i++) {
    aLi[i].i = i;
    aLi[i].onmouseenter = function () {
        aRi[flag].className = "";
        aRi[this.i].className = "show";
        flag = this.i;
    }
}




