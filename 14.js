/**
 * Created by 14486 on 2019/3/17.
 */
// 购物车价格结算
let aAdd = document.getElementsByClassName("add"),
    aLess = document.getElementsByClassName("less"),
    aSpan = document.getElementsByTagName("span"),
    aSum = document.getElementsByClassName("sum"),
    length = aAdd.length,
    arr1 = [8,10,12,23],
    arr2 = [],
    arr3 = [],
    num1 = 0;
for (let i = 0; i < length; i++) {
    aAdd[i].i = i;
    arr2[i] = 0;
    arr3[i] = 0;
    aAdd[i].onclick = function () {
        arr2[this.i]++;
        aSpan[this.i].innerHTML = arr2[this.i];
        arr3[this.i] = arr1[this.i]*arr2[this.i];
        aSum[this.i].innerHTML = arr3[this.i];
        num1++;
        aSpan[4].innerHTML = num1;
        let sum = 0;
        for (let j = 0; j < length; j++) {
            sum += arr3[j];
        }
        aSpan[5].innerHTML = sum;
    };
    aLess[i].i = i;
    aLess[i].onclick = function () {
        if(arr2[this.i]>=1){
            arr2[this.i]--;
            aSpan[this.i].innerHTML = arr2[this.i];
            arr3[this.i] = arr1[this.i]*arr2[this.i];
            aSum[this.i].innerHTML = arr3[this.i];
            aSpan[4].innerHTML = --num1;
            let sum = 0;
            for (let j = 0; j < length; j++) {
                sum += arr3[j];
            }
            aSpan[5].innerHTML = sum;
        }else{
            aSpan[this.i].innerHTML = 0;
        }
    }
}

// 星级评分
let aLi = document.getElementsByTagName("li"),
    aRight = document.getElementsByClassName("right")[0],
    oUl = document.getElementsByTagName("ul")[0],
    arr = ["很差","较差","还行","推荐","力荐"],
    flag = true,
    length = aLi.length;
let lastHTML = aRight.innerHTML;
for (let i = 0; i < length; i++) {
    aLi[i].i = i;
    aLi[i].onmouseenter = function () {
        if(flag){
            for (let j = 0; j <= this.i; j++) {
                aLi[j].className = "active";
            }
            for (let k = length -1; k > this.i; k--) {
                aLi[j].className = "";
            }
            aRight.innerHTML = arr[this.i];
        }
    };
    aLi[i].onclick = function () {
        flag = !flag;
    }
}
oUl.onmouseleave = function () {
    if(flag){
        for (let i = 0; i < length; i++) {
            aLi[i].className = "";
        }
        aRight.innerHTML = lastHTML;
    }
};

