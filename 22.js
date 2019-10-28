/**
 * Created by 14486 on 2019/3/21.
 */
// 1:作业圆周运动拖尾
// 2:显示系统当前时间
let oP = document.getElementById("p");
let oSpan = document.getElementsByTagName("span"),
    length = oSpan.length,
    arr2 = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
function toDouble(num) {
    return num = num<10?num="0"+num:num;
}
setInterval(fn1,1000);
fn1();
function fn1() {
    let arr = [];
    let date = new Date;
    arr.push(toDouble(date.getFullYear()));
    arr.push(toDouble(date.getMonth()+1));
    arr.push(toDouble(date.getDate()));
    arr.push(toDouble(date.getHours()));
    arr.push(toDouble(date.getMinutes()));
    arr.push(toDouble(date.getSeconds()));
    for (let i = 0; i < length-1; i++) {
        oSpan[i].innerHTML = arr[i];
    }
    oSpan[length-1].innerHTML = arr2[date.getDay()];
}