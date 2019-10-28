/**
 * Created by 14486 on 2019/3/17.
 */
// 二级导航

// 九九乘法表

// 刮刮乐;
let oBox = document.getElementById("wrap");
let str = "";
for (let i = 0; i < 10000; i++) {
    str += "<span></span>";
}
oBox.innerHTML = str;
let aSpan = document.getElementsByTagName("span");
for (let j = 0; j < 10000; j++) {
    aSpan[j].onmouseenter = function () {
        this.style.backgroundColor = "#fff";
    }
}

