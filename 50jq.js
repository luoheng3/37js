/*
Created by 14486 on 2019/8/24.
*/
$oBox.empty();   // 清空该元素里面的所有内容包括标签
$oBox.remove();  // 自杀
// 默认不带事件 带事件 参数必须true
let $obj = $oBox.clone(true);

$oBox.children(""); // 获取该节点的所有儿子
$oBox.children("#wrap"); // 只会获取儿子并且id=wrap的这个

// find()  获取所有后代
// 不可以没有参数,必须要有参数选择器字符串来进行筛选
$oBox.find("#wrap p");

$oBox.filter(".jj"); // 给有jj的加样式(选择满足条件的)
/*
5: is(".kk")
    判断有没有 返回布尔值
6: has()
    $P.has("a")
    选择所有p下面有a标签的P

7: not()
    与filter相反 除了括号里面的都可选择
8: .next()
    下一个兄弟元素
9: .nextAll()
    查找当前元素之后的所有同辈元素
10: prev()
    上一个
11: prevAll();
    上面的所有
12: siblings('selector')
    选中所有同级兄弟元素
13: parent() 爸爸  加s祖宗
    选中该元素的爸爸
14: offsetParent();
    找定位父级;
15: parentsUntil("body")
    找body以下的所有父级(找到所有父级知道参数里面的对象)
    不包含body也就是不包括参数
16: offsetParent()
    找定位父级 没有就是HTML(原生是body)
*/
/*
 一: 基本事件都是去掉on 都是addEventListener形式
    .click(function(e){}) // this执行 DOM对象
    e:经过包装的事件对象

 2:$(document).ready(function(){}) 类似于 window.onload
         // DOM加载完执行事件函数
        只需要DOM结构加载完就触发;
        一个页面可以多个ready;
    简写  $(function(){})

 3: hover事件
    $box.hover(function(){},function(){});
    第一个移入 mouseenter,第二个移出 mouseleave;
    只有一个表示是同一个函数
 4: 绑定事件
    $box.on("click",function(){});
        绑定多个事件; 传json;
        {click:function(){}}
 5: 事件委托;
    $box.on("mouseenter","p",function(){})
        p代表事件委托的子元素
 6: .off  解绑事件
    $box.off("click"); // 不用写解绑那个事件函数
    $box.off("click.goudan"); // 事件函数加名字
    $box.on("click.goudan");
 三: 效果API
    1: .show(2000,"ease") .hide()
        一般来做瞬间  显示   隐藏
        变化  透明度 宽高;
    运动曲线:可
    回调函数 可选 动画完成之后做什么
    toggle(); 取反 显示就隐藏;
 2: .fadeIn() .fadeOut()
    淡入 淡出
 3: .fadeToggle()
    显示,取反
 4: .fadeTo(1000,0.5)
        从0 - 0.5透明度变化 1秒
 5: .slideDown()
    慢慢从上到下显示
 6: .slideUp()
    慢慢从下到上显示
 7: .slideToggle()

 8: .annimate({
        width:200,
        height:100
 },2000,function(){

 })
    参数1: 必须是json;
    参数2: 时间;
    参数3: 动画执行完的回调函数
        jq的动画都是队列 先定义先执行
 9: .queue() 定义一个动画队列
 .dequeue() 队列结束;
 10: $.extend({
        goudan: function(){},
     })
     扩展$函数的API
 $.goudan();

 扩展JQ对象的API
 $.fn.extend({
    dachui:function(){
        this.css({
            color:"red"
        })
    }
 })
 */