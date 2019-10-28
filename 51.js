/**
 * Created by 14486 on 2019/3/19.
 */
// 兼容
// 获取类名的兼容

// classList的兼容

// bind的兼容
fn.bind(this,1,2,3);
Function.prototype.bind = Function.prototype.bind || function () {
        let obj = arguments[0];
        let This = this;
        let length = arguments.length;
        let arr = [];
        for (let i = 1; i < length; i++) {
            arr.push(arguments[i]);
        }
        // 问题在于怎么得到fn
        this.apply(obj,arr);
    };
