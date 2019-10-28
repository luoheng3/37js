/**
 * Created by 14486 on 2019/3/18.
 */
// && || 流程控制
if (3>2){
    fn();
}
3>2 && fn(); // 比if判断快
// || 可以设置默认值
let name;
let str = name || 3;

/*
* 显示类型转换
*   */
// 显示类型转换

// 数字转为字符串 String(data); 如果data是复杂类型 则调用 toString()
let num = 10;
let str = String(num);

// 字符串转数字 Number(data) 将一个非数字数据 转化为数字数据转不了就NaN
let str = "101";
let num = Number(str); // num = 101 转不了就NaN(不是一个数字但是number类型);
// NaN 不等于NaN  null => 0;

isNaN(str); // 判断是不是NaN 是 就是true
// 转化为布尔值 Boolean(data)  !!data

parseInt("value"); // 强制取整数
parseFloat("val"); // 最终都会得到一个number的数据
// 从第一个非空字符开始转换

// Math对象
Math.random();// 取0到1之间的随机数 取不到1
let a = Math.random()*4 + 6; // 6-10 乘以差值 +
let b = Math.ceil(2.3); // 3 向上取整
let c = Math.floor(2.3); // 2 向下取整
let d = Math.round(2.3); // 2 四舍五入
let e = Math.cbrt(8); // 2 取一个数的立方根
let f = Math.trunc(3.3); // 3 去掉小数,保留整数
let j = Math.hypot(3,4); // 5 返回所有参数平方和的平方根
let h = Math.pow(2,3); // 8 返回n的m次方
let sin = Math.sin(2); // 正弦值
let min = Math.min(x,y); // 返回最小值
let max = Math.max(x,y); // 返回最大值
let abs = Math.abs(3.2); // 绝对值
let sqrt = Math.sqrt(4); // 2 返回该数的平方根
let PI = Math.PI; // π 圆周率

