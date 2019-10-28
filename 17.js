/**
 * Created by 14486 on 2019/3/20.
 */
/* this(函数里面才有this  this指向是有函数的执行方式决定的)
*      函数名() this指向全局对象 window
*      对象.方法 函数内部this指向该对象
*      无论什么形式的事件函数 this指向触发事件的对象
*/
function a() {
    console.log(this);
}
oBox.a = function () {
    console.log(this);
};
document.onclick = oBox.a;  // this => window
/*
* 改变this指向
*   obj.fn.call(document,...) 第一个参数代表函数的this指向
*   obj.fn.apply(dom,[])
*   obj.fn.bind(dom,...) 不支持IE8及其以下 bind并不会帮助函数执行
*/
// forEach  针对于数组的
let arr = [3,2,12,43,435];
arr.forEach(function (val,index,self) {
    // val 代表数组的值
    // index 代表数组的序号
    // self 代表数组本身
});
// for in 遍历对象 json  性能并不好 因为会遍历原型上的属性
for (let key in Math){
    console.log(key);
}
document.all(); // 获取页面所有的节点;