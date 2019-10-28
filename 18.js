/**
 * Created by 14486 on 2019/3/20.
 */
// 字符串的方法
let str = "罗恒你个大帅比,你真的是什么都怕";
// 1: str.length 获取字符串的长度 可读不可写

let length = str.length;
// 2: 获取str的某个字符 str[2] 二祖宗不兼容
// so str.charAt(index) 兼容所有

str.charAt(0); // 罗
// 3: str.indexOf(search,index) 查找search在str的序号;
// index 从哪里开始查找 返回首次出现的位置 找不到返回-1
let num = str.indexOf("你",0); // 2
// 找出该字符所有出现的位置
function search(str,search) {
    let length = str.length;
    let index = 0;
    let arr = [];
    for (let i = 0; i < length; i++) {
        let num = str.indexOf(search,index);
        if(num===-1){
            return arr;
        }else{
            arr.push(num);
            index = ++num;
        }
    }
}
str.lastIndexOf("searchString","index"); // 倒着找

str.charCodeAt("index"); // 返回str的index序号所对应的ANSI编码

String.fromCharCode(2000); // 返回20000ANSI编码对应的字符

str.substring("startNumber","endNumber");// 截取字符串 返回截取的字符串
str.substring(2,4);  //左闭右开
str.substr(2,2); // 起始位置 截取长度
// 也是截取字符串 返回截取的字符串
str.slice("startNumber","endNumber"); //和上面差不多 但是允许负数 -3,-1

str.split("规则"); // 按照括号里的规则将字符串切割成数组;

str.toLocaleLowerCase();// 全部转换为小写;
str.toLocaleLowerCase();// 全部转换为大写

str.match("RegExpString");

str.repeat("num"); //复制num份
str.replace("RegExpString","replaceValue");

// 数组相关方法
let arr = ["ni","hao","ma"];

arr.push("?","1"); // 往数组的屁股后面加数据    返回改变后数组的长度
arr.pop();    //  删除数组的最后一项数据        返回被删除的数据
arr.shift();  //  删除数组的第一项数据          返回被删除的数据
arr.unshift("zao"); // 往数组的第一项添加数据

// 上面的方法都可以用这个方法 splice

arr.splice("start","deleteCount","add");//开始序号 删除几个(0) 用后面的替换删除的;
arr.push("ni"); arr.splice(arr.length,0,"ni");
arr.pop();      arr.splice(arr.length-1,1);

arr.sort(function (x,y) { // 数组排序
    return y-x; //降序 x代表的是数组的第一项 可以 y.num - x.num;
    // return 1; 倒序
});
arr.sort();// 升序

arr.reverse(); // 反转数组

arr.concat(arr); // 数组拼接 返回新数组 不改变原数组

arr.join("string"); // 把数组中的每一项用参数字符串拼接成字符串 返回该字符串

Array.isArray(arr); // 返回布尔值,判断arr是不是一个数组

arr.slice(2,5); // 截取数组 返回截取的数组 起始位置 结束位置

arr.some(function (x) {
    return x < 5; // 有一个为真就返回真
});
arr.every(function (x) {
    return x<5; // 全部为真才返回真;
});
arr.filter(function (x) {
   return x%2===0; // 返回满足条件的新数组;
});
arr.reduce((a,b,index,self) => {
    // a: 表示上一次调用回调返回的值,或者是提供的初始值
    // b: 当前值
    // index: 当前序号
    // self: 数组本身
});
// 初级用法 数组求和 求乘积
let arr = [1,34,3,34,34];
let s = arr.reduce((a,b) => {
   return a + b;
});
// s => 397
// 高级用法 计算数组每个元素出现的次数
let obj1 = arr.reduce((a,b) => {
    if (b in a) {
        a[b]++
    } else {
        a[b] = 1
    }
    return a
},{});
console.log(obj1); // 1: 1, 3: 1, 34: 2, 345: 1

let newArr = arr.map((item) => {
    // 每一项,序号,数组本身
    return item*2
});
// [2, 68, 6, 68, 690]