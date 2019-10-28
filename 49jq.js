/*
Created by 14486 on 2019/8/24.
jquery
    是由原生JS封装的一个框架库
        优势: 在操作DOM,做特效,ajax方面有很大的优势
            但也并不是万能的
            他不能加快代码的执行效率,但是能极大地加快开发效率

    版本:
        1.xxx  兼容所有浏览器,包括ie678
        2.xxx  不兼容ie8及其以下, 对大小优化了很多
        3.xxx  在2的基础上引入了一些新的H5API删掉已经废弃的一些方法

    DOM元素 操作起来有兼容问题
        获取元素全浏览器兼容的方法
            getElementById();  getElementSByTagName();
        获取样式
            getComputedStyle(oBox).width   100px;
            oBox.currentStyle.width        100px
        动画也不方便, 封装animation()
        html的节点操作也挺麻烦,兼容性挺多;

    我们写代码更多的应该考虑的是业务逻辑,而不是去兼容浏览器版本
        所以我们要学习Jquery,帮我们解决浏览器兼容的问题;

    jq里面所有的操作基本都是方法的形式
        自带遍历 获取的都是一堆(哪怕是id)

     一: jquery对值得操作共性
         1:设置一个值,传两个参数(有些传一个)
         2:设置多个值,传json (有些不能传)
         3:自带遍历
         4:传一个参数,可以获取值(有些不用传)
         5:获取值一般返回的是字符串,而其他的返回的还是jq对象
         6:允许函数的返回值当做参数;
         
    webstorm定义快捷键
        settings editior live-templates
        代码提示功能
            set language javascript library; 点击加号;
*/
// 引入jQuery  去bootcdn那里面有很多框架的引入 或者百度cdn
// <script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>

// 不推荐使用
try{
    console.log(1); // 正常执行
    x++;  // 当这里面的内容报错的时候就会走下面
    console.log(2); // 这行不会执行
}catch(err){
    console.log(err); // err就是报错内容
}

// 获取元素 $("#box p") css怎么写 这里就怎么写;
let $oBox = $("#box");

// html() text() 不传参就是获取值,传参就是设置值
let html = $oBox.html();   // 不传参就是获取值
$oBox.html("内容");        //  传参就是设置值
$("input").val();         // 获取表单元素的值;

// jq对象的互转
let jqBox = $(oBox);            // 原生转化为jq对象
let oBox = $oBox.get(0);        // jq对象转化为 DOM对象;
let oBox2 = $oBox[1];           // jq对象转化为 DOM对象;

$("p").eq(1);       // .eq(index)   获取单个jq节点

// index相关
$("#wrap").index(); // 返回该元素在父级的序号(也就是该元素是父级的第几个标签)
let index = $allP.index($("#p")); // 获取p元素在 allp中的位置;
let index2 = $("#p").index("p");  // 基本同上 p是选择器

//  .each(callback) // 遍历jq对象  对每个对象的操作不一样;需要挨个操作
$oBox.each(function (index,val) {
    // index 序号  val是每一个DOM对象 ;
    // $(this)    指向序号对应的 DOM对象
    $(this).html(index+2);
});

// attr("attrName")  一个值就是获取值, 两个参数就是设置值;

$oBox.attr("title");  // 罗恒  只会获取第一个对象的title属性值,没有就是undefined
$oBox.attr("id","luoHen");  // 设置单个属性值
$oBox.attr({                // 设置多个属性值
    id: "LuoHen",
    title: "罗恒"
});

// .removeAttr("attrName")  删除属性
$oBox.removeAttr("title");

// prop()  一样的 只能操作合法的标签属性  removeProp()
$("input").prop("checked",true);

// 类名相关操作
$oBox.addClass("content");    // 添加类名
$oBox.removeClass("content"); // 移除类名
$oBox.toggleClass("content"); // 有就删除,没有就加上;
$oBox.hasClass("content");    // 判断有没有该类名;

// css("attrName",value);  获取/设置样式
$oBox.css("color","red");  // 设置单个
$oBox.css({                // 设置多个
    color:"red",           // 设置的是行内样式
    "font-size": "18px"    // 获取的是元素最终的表现样式 getComputedStyle() "200px"
});

// 定位相关 offset() position()
let top = $oBox.offset().top;  // 返回元素距离文档的距离 包含自身margin 没有单位
let left = $oBox.position().left; // 返回元素到定位父级的距离; 不包含自身margin

$oBox.offset({ // 设置值;
    left: 200,
    top: 100
});

// .scrollTop() .scrollLeft();
$(document).scrollTop();  // 获取文档的滚动高
$(document).scrollTop(200);  // 设置滚动高;

// 各种宽高
$oBox.width();  // 样式宽高 100  clientWidth原生
$oBox.innerWidth(200); // 宽度 + padding 110  offsetWidth
$oBox.outerWidth(); // 宽度 + padding + border 114  scrollWidth

// 创建节点相关
let $oDiv = $("<div></div>");  // document.createElement("div");
$oBox.append($oDiv);           // el.appendChild(el)
$oDiv.appendTo($oBox);
$oBox.prepend($oDiv);  //往前面加
$oBox.after($oDiv);   // 同级后面加
$oBox.before($oDiv);  // 同级前面加
$oBox.insertBefore(); //插入

$p.wrap("<div></div>");  //分别给选中的元素各自加一个父级
$p.wrapAll("<div></div>");  //分别给选中的元素自加一个总的父级
$p.unwrap();               // 干掉爸爸
