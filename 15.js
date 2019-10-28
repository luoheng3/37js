/**
 * Created by 14486 on 2019/3/17.
 */
//案例 多层选项卡
let aLi = document.querySelectorAll("#left ul li"),
    aUl = document.querySelectorAll("#right .img ul"),
    aBtn = document.querySelectorAll("#right .list ul li"),
    index = 0,
    ind = 0,
    length = aLi.length;
for (let i = 0; i < length; i++) {
    aLi[i].onmouseenter = function () {
        aLi[index].classList.remove("active");
        aUl[index].classList.remove("active");
        index = i;
        this.classList.add("active");
        aUl[index].classList.add("active");
    }
}
for (let j = 0,len=aBtn.length; j < len; j++) {
    aBtn[j].onmouseenter = function () {
        // 动态获取选中的图片列表
        let aImg = document.querySelectorAll("#right .img ul.active li img");
        aBtn[ind].classList.remove("active");
        aImg[ind].classList.remove("active");
        ind = j;
        aBtn[ind].classList.add("active");
        aImg[ind].classList.add("active");
    }
}

