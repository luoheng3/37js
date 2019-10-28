/*
Created by 14486 on 2019/3/29

 函数执行前加new对该函数的影响：
     1. 函数内部会产生一个对象，this指向这个对象
     2. 函数默认返回这个对象

 在创建一个类时，
     不同的部分，也就是每个实例对象都不一样的部分，放在构造函数里面
     相同的部分，也就是每个实例对象一样都可以访问的部分，放在原型里面

 原型链
     当一个对象在访问某个属性的时候，首先会先从自身查找，如果没有找到，
     会到上一层也就是它构造函数的原型（prototype）里面去查找，
     如果再没有找到，就依次往上继续查找，直到Object.prototype为止，
     还没有找到才返回undefined
*/

function Banner(x,y) {
    // 构造函数第一个字母大写 函数式编程fp oop面向对象编程
    this.x = x;
    this.y = y;
}
// 构造函数有一个属性 .prototype 这个属性称之为实例化对象的原型
let obj = new Banner(2,3);
Banner.prototype = {
    constructor:Banner
};
let flag = obj instanceof  Banner; // true

obj.__proto__ = Banner.prototype;

obj.hasOwnProperty("attr"); // 不会遍历原型上的属性 判断某个属性是不是私有属性
// for in 会遍历对象原型上的属性 所以加上 obj.hasOwnProperty("attr");

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
}

/*
 对象属性的三条特性：
     configurable 是否可以删除
     writable  可写
     enumberable 可遍历
*/
// 对对象做一些处理 可读可写? 可遍历?
Object.defineProperty(obj,"name",{
    configurable:false, //能不能被删除 delete
    writable:false, // 能不能写
    enumberable:false, //能不能被遍历
    value : "狗蛋",//内容
    get:function () {
        //访问器属性  在读取是触发
    },
    set:function(){
        //访问器属性  在修改是触发
    }
});
// 深拷贝
function Clone( obj ) {
    let o = Array.isArray( obj )?[]:{};
    for (let i in obj)
        o[i] = /object/i.test(typeof obj[i])? Clone(obj[i]):obj[i];
    return o;
}