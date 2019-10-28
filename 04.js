/**
 * Created by 14486 on 2019/3/16.
 */

// 操作行内css样式 (除了img的宽度不带单位 其他获取设置都要带单位)

// 设置单条样式 (复合属性驼峰写法)
document.style.width = "100px";

// 设置多条样式 (直接等于会覆盖,所以应该加等于);
oBox.style.cssText += "width:100px;height:200px;background-color:green";

// 上面还是感觉很长不好看,所以
oBox.className = "wrap"; // 在css上面写好内容,然后操作class

// 操作float 最好不要直接写float 不过现代浏览器都可以直接点
oBox.cssFloat = "right"; // 普通浏览器
oBox.styleFloat = "right"; // ie

// 原生JS没有任何操作外部文件的权限  只能读取
// innerHTML可以解析标签  innerText不能解析标签

// []  数组的运用  不能·变量 .能够做的 [string] 也能做
// 一个对象下面不存在的属性 不会报错 只会是undefined






