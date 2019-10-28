/**
 * Created by 14486 on 2019/3/22.
 */
// 时间版运动框架升级
// 各种运动曲线 tween.js
let tween = {
    // t = 经过了多长时间
    // b = 初始值
    // c = 变化值
    // d = 总时长
    linear:function (t,b,c,d) { // 匀速
        return t/d*c+b;
    },
    easeIn:function (t,b,c,d) {// 加速
        return t/d*c
    }
};

function move(obj,attr,target,time) {
    let init = parseFloat(getComputedStyle(obj)[attr]);
    let flag = target>init?1:-1;
    let t;
    fn();
    let t1 = new Date(); // t2-t1/time = s/val-init
    function fn() {
        t = requestAnimationFrame(fn);
        let t2 = new Date;
        let s = Math.abs((t2-t1)/time*(target-init))*flag + init;
        if((s - target)*flag>=0){
            s = target;
            cancelAnimationFrame(t);
        }
        obj.style[attr] = s +"px";
    }
}
