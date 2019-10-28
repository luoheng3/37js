/*
Created by 14486 on 2019/8/24.
  1:运算符
    算术运算符
        + - * / %
    比较运算符
        < > <= >= != !== == ===
        两边都是数字,则就是比较数值大小
        两边都是字符串,则比较他们的字符编码
        只要有一边是数字,则另一边会发生隐私类型转换,转为数字
        null == undefined  true;
    逻辑运算符
        &&   两边真都为真  这是当两边都是布尔值的时候
        ||   一边为真,就真
        !    取反 假变真 真变假
            顺序  ! > && > ||
        当两边不都是布尔值的时候
            && 遇到假就停
                3 > 2 && alert(1); 3 && console.log(5);
            || 遇到真就停  x = x || 3;
    赋值运算符
        = += -= *= /= %= ++ --
        a++ 和 ++a的区别
            1: 在没有进行赋值的时候没有区别
            2: 在赋值的时候 ++a 是先加 后赋值 a++先赋值
            3: a++如果参与运算,先进性运算,然后自己在加一
 
    运算符的优先级
        单元运算符(! ++ --) > 算术运算符 > 比较运算符 > 逻辑运算符 > 赋值运算符
    2: 判断一个数字是不是NAN
        isNaN()
    3: Number() String() Boolean()
    4: parseInt(num) parseFloat(num)
        从第一个非空字符开始能转则转,不能就是NAN
 */
let name = "罗恒";
switch(name){
    case "范雨菲":
        alert(1);
        break; // 满足条件之后就不会执行下一个;
    case "赖你":
        alert("赖你");
        break;
    default :
        alert(2);
        break;
}
// 用switch 算范围 不经常用
let x = 30;
switch(true){
    case x < 30:
        alert(1);
        break;
    case x = 30:
        alert();
        break;
}
// for循环
for (let i = 0; i < length; i++) {

}
// while循环
i = 0;
while (i < 10){
    i++;
}
do{

}while(i < 10);
let num = prompt("请输入一个数字");
let five = num % 5;
let six = num % 6;
if(five){
    if(six){
        alert("不能被5整除,也不能被6整除");
    }else{
        alert("不能被5整除,但能被6整除");
    }
}else{
    if(six){
        alert("能被5整除,但能被6整除");
    }else{
        alert("能被5整除,也能被6整除");
    }
}
let n = 100;
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 求一个满足要求的数
for (let j = 100; j <= 999; j++) {
    let bai = parseInt(j/100);
    let shi = parseInt((j - bai*100)/10);
    let ge = j - bai*100 - shi*10;
    let t = Math.pow(bai,3) + Math.pow(shi,3) + Math.pow(ge,3);
    if(t === j){
        console.log(j);
    }
}
// 利用递归求阶层
function fn(n) {
    if(n===1){
        return 1;
    }
    return n*fn(n-1);
}
console.log(fn(5));