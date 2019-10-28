/**
 * Created by 14486 on 2019/3/28.
 */
/*jsonp
*   没有跨域问题
*       原理就是创建一个script标签
*       oninput 事件 内容发生改变的时候触发
*       <script>*/

inp.oninput = function () {
    let val = this.value;
    if(val){
        let oS = document.createElement("script");
        oS.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=fn";
        document.body.appendChild(oS);
        // 拿到数据后就删除该标签
        oS.onload = function () {
            this.parentNode.removeChild(this);
        }
    }
};
function fn(data) {
    let arr = data.s;
    let length = arr.length;
    ul.innerHTML = "";
    for (let i = 0; i < length; i++) {
        let oLi = document.createElement("li");
        oLi.innerHTML = arr[i];
        ul.appendChild(oLi);
    }
}

