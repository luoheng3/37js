/**
 * Created by 14486 on 2019/3/28.
 */
// 瀑布流
let [aUl,oTest,s,c,timer]=[
    document.querySelectorAll("#box ul.rol"),
    document.getElementById("test"),
    0,
    10
];
//let s = 0;
//let c = 10;

//触发条件不是点击，而是滚动，onscroll
//document.onclick = function () {
eFn(100);
window.onscroll = function () {
    eFn(1000);
};
function eFn(x) {
    if ( s >= 100 )return;
    clearTimeout(timer);
    timer = setTimeout( function () {

        let testToTop = oTest.offsetTop;
        let nowBottom = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;

        console.log( testToTop , nowBottom );

        if ( testToTop - nowBottom <= 50 ){
            ajax({
                url : "http://120.77.174.93/dbmovie",
                data : {
                    start : s,
                    count : c
                },
                success : function (data) {
                    draw(data);
                }
            });
            s += c;
        }
    },x);
}
//};


//渲染页面，这个过程和ajax无关，ajax只负责拿到数据，前端页面的实现与它无关的
function draw( data ){

    let i = 0;
    !function m() {
        if(i>=c)return;//当完成之后，结束
        let d = data[i];
        let rating = d.rating.average;
        let cName;
        if ( rating >= 8 ){
            cName = "high";
        }else if ( rating >= 5 ){
            cName = "middle";
        }else{
            cName = "low";
        }

        let oImg = new Image();
        oImg.src = `${ d.images.large }`;
        oImg.onload = function () {
            let oLi = document.createElement("li");
            oLi.innerHTML = `
                            <div class="img">
                                <img src="${ d.images.large }" width="230" height="auto" />
                            </div>
                            <p>片名：<a href="${d.alt}" target="_blank">《<span>${d.title}</span>》</a></p>
                            <p>年份：<span>${d.year}</span></p>
                            <p>评分：<span class="${cName}">${rating}</span></p>
                        `;

            aUl[indexOfShort()].appendChild( oLi );
            i ++;
            m();

            let left = oLi.offsetLeft;
            let top = oLi.offsetTop;

            oLi.style.cssText = `top:-${top}px;left:-${left}px;transition:top .5s,left .5s;`;
            setTimeout(function () {
                oLi.style.top = "0";
                oLi.style.left = "0";
            },100);
        };
    }();
}

//选择最短的ul
function indexOfShort() {
    let index = 0;
    let iHeight = aUl[0].clientHeight;
    for (let i = 1,length=aUl.length; i < length; i++) {
        let h = aUl[i].clientHeight;
        if ( h < iHeight ){
            index = i;
            iHeight = h;
        }
    }
    return index;
}

function ajax( json ) {

    //处理参数
    let type = json.type || "GET";
    let url = json.url;
    let data = json.data || "";
    let success = json.success;
    let error = json.error;
    let dataType = json.dataType || "json";

    //处理data，同时处理url
    if ( data ){
        let str = "";
        for (let key in data) {
            str += key + "=" + data[key] + "&";
        }
        str += "_="+new Date().getTime();
        data = str;
        if ( /get/i.test(type) ){
            url += "?"+data;
            data = "";
        }
    }

    //请求部分
    let xhr = new XMLHttpRequest();
    xhr.open( type , url , true );

    //send之前设置请求头，post方式下必须的
    xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded');

    xhr.send( data );
    xhr.onreadystatechange = function (ev) {
        if ( this.readyState === 4 ){
            let status = this.status;
            if ( status >= 200 && status < 300 ){
                let rep = this.responseText;
                if ( dataType === "json" )rep = JSON.parse(rep);
                success && success( rep );
            }else{
                error && error( status );
            }
        }
    };
}