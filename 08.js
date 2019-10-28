/**
 * Created by 14486 on 2019/3/17.
 */
// break 在循环里面 表示跳出该循环(默认跳出的是最近的循环)
// 如果跳出指定的循环 则要加个标识 a:
a:for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 7; j++) {
        if( i*j > 30 ){
            break a;
        }
    }
}
console.log(2); // 自行百度console的其他用法,  ie8及其以下 没有 所以用完就注释
console.dir(Math); // 这种就可以查看对象下有什么属性方法了

// 尽量减少和元素修改内容的操作,能统一整合好就一次性整好 (点击生成10个div)

console.time(1);
// 测试代码执行时间
console.timeEnd(1);
// 判断if  三目
3>2?console.log(true):console.log(false);
// 还可以骚操作 更快
3>2 && (consol.log(true),1) || console.log(false);

// a++ ++a 在没有赋值的时候没有区别 在赋值的时候 a++是先赋值,在自增;
let a = 1;
let b = ++a; // a = 2; b = 2;
let c = a++; // c = 1; a = 2;
// 变量可以当开关,如果没有任何联系的需要做判断,就可以用数组来做开关,或者自定义属性做开关
// 数组可以存值,自定义属性也可以存值
