/**
 * Created by 14486 on 2019/3/21.
 */
// 查找替换
let oInp1 = document.getElementsByClassName("inp1")[0],
    oInp2 = document.getElementsByClassName("inp2")[0],
    oBtn1 = document.getElementsByClassName("btn1")[0],
    oBtn2 = document.getElementsByClassName("btn2")[0],
    oP = document.getElementsByClassName("txt")[0];
oBtn1.onclick = function () {
    let val = oInp1.value;
    if(val){
        let str = oP.innerHTML;
        if( str.indexOf(val) === -1 ){
            alert("没有该字符,请重新输入");
        }else{
            oP.innerHTML = str.split(val).join("<span>"+val+"</span>");
        }
    }
};
oBtn2.onclick = function () {
    let val1 = oInp1.value;
    let val2 = oInp2.value;
    if(val1 && val2){
        let str = oP.innerText;
        if( str.indexOf(val1) === -1 ){
            alert("无法替换,请重新输入");
        }else{
            oP.innerHTML = str.split(val1).join("<span>"+val2+"</span>");
        }
        oInp1.value = "";
        oInp2.value = "";
    }
};

// 倒计时跳转
let oSpan = document.getElementsByTagName("span")[0],
    num = 5;
let t = setInterval(function () {
    num--;
    if(num<0){
        clearInterval(t);
        window.open("https://www.baidu.com","_self");
    }else{
        oSpan.innerHTML = num;
    }
},1000);

//圆周运动
