/**
 * Created by 14486 on 2019/3/28.
 */
/*
 <form action="https://www.baidu.com" method="get">
     用户名:<input type="text" name="user"><br>
     密码:<input type="text" name="pwd"><br>
    <input type="submit" value="提交">
 </form>
 form会跳转页面  ?user=value&pwd=value&... get

 ajax
 往后台发送请求：
    不需要发送数据的话，就正常的写就OK
 需要发送数据?
     1: get 需要在URL链接后面拼上一段 ?user=value&pwd=value&...
     2: post send(参数形式发送);
     encodeURI(str)编码  decodeURI(str)解码
 ajax
   异步的JavaScript 和 XML 不能跨域
   特点: 再不刷新页面的情况下传输数据
       let xhr = new XMLHttpRequest();
       xhr.open("get|post","url",true);
       xhr.send(null); // 前端发送给后台的数据
       xhr.onreadystatechange = function(){
           if(xhr.readyState===4 && xhr.status===200){
               readyState请求状态码
                   0:请求还没建立
                   1:请求已经建立但还没有发送
                   2: 请求已经发送,但是还没有处理完成返回的数据
                   3:请求有一部分返回的数据已经可用了
                   4: 请求完全完成,所有数据可用
               let data = JSON.parse(this.responseText);
           }
       }
*/
// 封装ajax
ajax({
    type:"get",
    url:"https://www.baidu.com",
    data:{
        "name":"luoheng",
        "age":18
    },
    success:function (msg) {

    },
    error:function () {

    }
});
function ajax(json) {
    let xhr = new XMLHttpRequest();
    let type = json.type || "get"; // 不传 默认get
    let data = json.data; // 如果没传就是undefined;
    let url = json.url;
    let str = "";
    if(data){
        for (let key in data){
            str+= key + "=" + data[key] + "&"
        }
        // 解决IE两个请求链接一模一样时的缓存问题,所以要拼接上日期毫秒数
        str += "_="+new Date().getTime();
    }
    // 判断用户是什么方式请求
    let da = str;
    if(/get/i.test(type)){
        url += "?" + da;
        da = null;
    }
    xhr.open(type,url,true);
    // post方式的时候必须要设置请求头
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send(da);
    xhr.onreadystatechange = function () {
        if(this.readyState===4 && this.status===200){
            let data = JSON.parse(this.responseText);
            json.success && json.success(data);
        }else{
            json.error && json.error(status);
        }
    }
}

