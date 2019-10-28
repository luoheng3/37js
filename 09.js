/**
 * Created by 14486 on 2019/3/17.
 */
// 1:点击切换选项卡
let aLi = document.getElementsByTagName("li"),
    length = aLi.length,
    aImg = document.getElementsByTagName("img"),
    index = 0; // 当你不知道,而又要用它的时候,就存起来,存序号
for (let i = 0; i < length; i++) {
    aLi[i].i = i;
    aLi[i].onclick = function () {
        aLi[index].className = "";
        aImg[index].className = "";
        index = this.i;
        aLi[index].className = "show";
        aImg[index].className = "show";
    }
}
// 伸缩式导航
let aBox = document.getElementsByClassName("box"),
    aUl = document.getElementsByTagName("ul"),
    length = aBox.length;
for (let i = 0; i < length; i++) {
    aBox[i].i = i;
    aBox[i].flag = true; // 每个的状态都是独立的,并不会受其他影响 所以要存多个值
    aBox[i].onclick = function () {
        if(this.flag){
            aUl[this.i].className = "show";
        }else{
            aUl[this.i].className = "";
        }
        this.flag = !this.flag;
    }
}

// 将动态获取的类数组转化为静态数组
let oBox = document.getElementsByTagName("box");
let arr = [];
arr[i] = oBox[i]; //就这样就可以了

/*
* 运算符
*   算术运算符 + - * / %(模就是余数)
*   带运算的赋值运算符 += -+ *= /=  = %= ++ --
*   index %= length 的用途 跑马灯 123456,123456点击往下跳一次 轮播下面的按钮
*   比较运算符 < > <= >= != !== == === 最终会得到一个布尔值数据
*       当两个字符在作比较的时候,比的是挨个挨个的ASCII码
*       6 < "50"  => true  当一边是数字,另一边是字符,作比较,
*       注意没有 2<x<50不能这么写  x>2 && x<50;
*   逻辑运算符
*       && 两边真才真 (针对两边都是布尔值的时候)
*       || 两边都假才假 (针对两边都是布尔值的时候)
*       !  取反
*       当两边不都是布尔值的时候
*           && 遇到假就停  3>2 && fn();
*           || 遇到真就停  name = name || 3;
*/

/*
* 运算符优先级
*   1: . [] ()
*   2: ++ -- ! (一元运算符) delete new typeof
*   3: * / % 乘除模
*   4: + - +(字符串连接)
*   5: < <= > >= instanceof 比较运算符
*   6: == != === !===
*   7: && || 逻辑运算符
*   8: ? : 三目
*   9: = 赋值运算符
*   10: , 逗号运算符
*/



