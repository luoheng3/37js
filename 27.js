/**
 * Created by 14486 on 2019/3/22.
 */
// 认识dom以及新的API
let b = document.childNodes; // 所有节点 文本节点 元素节点 注释节点
let val = b[0].nodeValue; // 获取节点值
let type = b[0].nodeType; //元素节点的类型为1 文本是3
let name = b[0].nodeName; // p
let a  = document.children; // 只获取子元素节点()
let c = oBox.nextElementSibling(); //下一个元素节点
let d = oBox.previousElementSibling();//上一个元素节点

let f = oBox.parentNode; //获取父元素节点 兼容所有
let e = oBox.offsetParent; // 获取定位父级

// 关于增删改
let oDiv = document.createElement("div");
document.appendChild(oDiv); // 增
oParent.insertBefore("newChild","当前某一个子节点")

oBox.parentNode.removeChild(oBox); // 删除 自己是不能删除自己  只能父亲来干

// 关于文档碎片
let oP = document.createElement("p"),
    oA = document.createElement("a"),
    oS = document.createElement("span");
let frag = document.createDocumentFragment();
frag.appendChild(oP);
frag.appendChild(oA);
frag.appendChild(oS);
oBox.appendChild(frag);
