/**
 * Created by 14486 on 2019/3/17.
 */
/*
* <!--不想让a标签跳转-->
  <a href="javascript:void(0);">sss</a>
 * ID获取时，前缀必须是  document.
 * 其他方法获取时，前缀可以是某一个节点对象，表明不是从所有节点里面找，而是只从该节点子元素里面找


 通过ID获取
 document.getElementById()

 通过class获取，不兼容IE8及以下
 .getElementsByClassName()
 获取的是个 类数组 （类似于数组，可以用下标，可以用.length）

 通过 标签名 获取
 .getElementsByTagName()
 获取的是个 类数组

 通过 name 获取
 .getElementsByName()
 获取的是个 类数组


 通过 选择器 找，不兼容IE7及以下
 .querySelector()       直接获取单个节点对象
 .querySelectorAll()    获取类数组
 */

