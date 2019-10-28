// JS中的数据类型 (六大数据类型)
let name = "罗恒"; // string
let age = 25;     // number
let isMarrid = false; // boolean
let obj = { // object
    data:"1"
};
let o = null; // null
let s;        // undefined
function add() { // function
}
//判断一个数据的数据类型
console.log(typeof add);

// +号两边 任意一边 有字符串  那么他的功能就是拼接
let str1 = name + age;  // 罗恒25;

// js操作标签属性

let oBox = document.getElementsByClassName("box")[0];

// 操作合法的标签属性 dom.attr
oBox.id = "box";
oBox.title = "你好吗";
oBox.className += " wrap";  // class是保留字 不能直接操作 要换成className

// 操作自定义的标签属性 (也可以操作合法标签属性)
// 获取属性值
let love = oBox.getAttribute("love"); // 我爱你
// 设置属性值
oBox.setAttribute("love","我爱你范雨菲");
// 删除属性
oBox.removeAttribute("love");

// dataset对象
// data-a="你好" 标签属性
console.log(oBox.dataset.a); // 你好 遵循驼峰命名

let str = "字符串里的空格一定是有用的";

