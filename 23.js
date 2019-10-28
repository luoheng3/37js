/**
 * Created by 14486 on 2019/3/22.
 */
// 速度版运动框架  初级版
function speed(obj,attr,val,s){
    let startVal = parseFloat(getComputedStyle(obj)[attr]);
    let flag = (val > startVal)?1:-1;
    let num;
    fn();
    function fn() {
        let startVal = parseFloat(getComputedStyle(obj)[attr]);
        num = startVal + s * flag;
        let t = requestAnimationFrame(fn);
        if ((num - val) * flag >= 0) {
            num = val;
            cancelAnimationFrame(t);
        }
        obj.style[attr] = num + "px";
    }
}
// 时间版运动框架
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