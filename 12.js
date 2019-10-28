/**
 * Created by 14486 on 2019/3/17.
 */
/*
* dom.classList  不兼容ie8及其以下
*   .add() 增加类名
*   .remove() 删除类名
*   .toggle() 取反
*   .contains() 是否有
*/
// 作业 全选 反选
let aLi = document.getElementsByTagName("li"),
    oAll = document.getElementsByClassName("all")[0],
    oF = document.getElementsByClassName("fan")[0],
    oN = document.getElementsByClassName("no")[0],
    oBox = document.getElementsByClassName("box")[0];
length = aLi.length;
oAll.lastName = oAll.className;
oF.lastname = oF.className;
oN.lastname = oN.className;
// 点击选中
for (let i = 0; i < length; i++) {
    aLi[i].onclick = function () {
        this.className = this.className?"":"active";
        fn();
    };
}
// 全选
oAll.onclick = function () {
    oAll.className = oAll.lastname + " active";
    oN.className = oN.lastName;
    oF.className = oF.lastname;
    for (let j = 0; j < length; j++) {
        aLi[j].className = "active";
    }
};
// 全不选
oN.onclick = function () {
    oAll.className = oAll.lastname;
    oF.className = oF.lastname;
    oN.className = oN.lastName + " active";
    for (let k = 0; k < length; k++) {
        aLi[k].className = "";
    }
};
// 反选
oF.onclick = function () {
    oF.className = oF.lastname + " active";
    oAll.className = oAll.lastname;
    oN.className = oN.lastName;
    for (let h = 0; h < length; h++) {
        aLi[h].className = aLi[h].className?"":"active";
    }
    fn();
};
function fn() {
    let num = oBox.getElementsByClassName("active").length;
    if(num===length){
        oAll.className = "active";
    }else{
        oAll.className = "";
    }
}
