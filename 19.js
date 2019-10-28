/**
 * Created by 14486 on 2019/3/20.
 */
// 案例商品按价格排序
    

// 定时器
let t1 = setInterval(function () {
    // 每隔13毫秒执行一次
    // 传参可以放到后面
    console.log(2);
},13);

let t2 = setTimeout(function () {
    console.log("一秒后在执行");
},1000);

clearInterval(t1); // 清除定时器
clearTimeout(t2);  // 清除定时器

setTimeout(function () {
    console.log("s1");
    setTimeout(function () {
        console.log("s2");
    },1)
},1);
Promise.resolve().then(function () {
    console.log("P1");
}).then(function () {
    console.log("P2");
});
// P1 P2 s1 s2;
eval("会把这里的字符串当成代码来执行");

// 使用递归的方式替代 setInterval; 原因当代码量大的时候可能本次还没执行完
setTimeout(fn);
function fn() {
    console.log(1);
    // some code....
    setTimeout(fn);
}