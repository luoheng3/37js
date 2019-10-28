/**
 * Created by 14486 on 2019/3/23.
 */
// 轮播图 推荐使用百分比布局 只要改动一个就可以了
let aLi = document.querySelectorAll("#box .btn ul li"),
    oImg = document.querySelectorAll("#box .btn ul li a img"),
    aSpan = document.getElementsByTagName("span"),
    oUl = document.querySelector("#box .img ul"),
    length = aLi.length,
    width = 326,
    index = 0;
console.log(width);
for (let i = 0; i < length; i++) {
    aLi[i].onmouseenter = function () {
        aLi[index].classList.remove("active");
        index = i;
        this.classList.add("active");
        oUl.style.marginLeft = -(i+1)*width + "px";
    }
}
aSpan[0].onclick = function () {
    clearInterval(t);
    aLi[index].classList.remove("active");
    index--;
    if(index<0){
        index = length-1;
    }
    aLi[index].classList.add("active");
    oUl.style.marginLeft = -(index + 1) * width + "px";
};
aSpan[1].onclick = function () {
    clearInterval(t);
    fn();
};
let t = setInterval(fn,3000);
function fn() {
    aLi[index].classList.remove("active");
    index++;
    index%=length;
    aLi[index].classList.add("active");
    if(index>length-1) {
        index = 0;
    }
    oUl.style.marginLeft = -(index + 1) * width + "px";
}
