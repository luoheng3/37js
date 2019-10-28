/**
 * Created by 14486 on 2019/3/17.
 */
// 函数自执行 前面是一元运算符都行
!function () { // ! 可以换成 + -  void ~
    console.log(1);
}();
(function () {
    console.log("函数自执行");
})();

// 不定参 arguments
function add() {
    let num = 0;
    for (let i = 0,length = arguments.length; i < length; i++) {
        num+=arguments[i];
    }
    return num;
}

// return  函数一旦遇到 就不会往下面执行了 返回值 只在函数里面有作用 只能return最近的函数
// 循环里面 break跳出循环 continue只跳出本次循环

// classList的兼容
function getClassList(dom) {
    if(!document.classList){
        dom.classList = {
            add:function(){
                let length = arguments.length;
                let str = dom.className || "";
                for (let i = 0; i < length; i++) {
                    str = str + " " + arguments[i];
                }
                dom.className = str;
            },
            remove:function(val){
                let str = dom.className;
                str.replace(new RegExp("\/\b"+val+"\b\/"),"");
            },
            contains:function(val){
                let str = dom.className;
                let reg = new RegExp("\b"+val+"\b");
                return reg.test(str);
            },
            toggle:function(val){
                dom.classList.contains(val)?dom.classList.remove(val):dom.classList.add(val);
            }
        }
    }
    return dom.classList
}



