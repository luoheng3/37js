var oBox = document.getElementById("box"),
    aInput = oBox.querySelectorAll("ul li input"),
    oTip = document.getElementById("tip"),
    length = aInput.length;

var reg = {
    qq : /^[1-9]\d{4,10}$/,
    tel : /^1[3-9]\d{9}$/,
    user : /^[a-z]\w{5,15}$/i,
    pwd : /^[\w~!@#$%^&*()+{}[\]:"|',.?\-/]{6,16}$/,
    email : /^[1-9a-z]\w+@[0-9a-z\-]{2,}(\.[a-z]{2,}){1,2}$/i
};

for (var i = 0; i < length; i++) {
    (function(i){
        aInput[i].onblur = function (ev) {
            var val = this.value;
            if ( i === 2 && aInput[1].value ){
                if ( val ){
                    if ( this.value === aInput[1].value ){
                        //满足规则
                        this.parentNode.className = "right";
                    }else{
                        //不满足规则
                        this.parentNode.className = "wrong";
                        aInput[1].focus();//不能一直锁死在再次输入框，万一第一次密码就输入错误了呢！
                    }
                }
            }else{
                if ( val ){
                    //value有值
                    if ( reg[this.name].test(val) ){
                        //满足规则
                        this.parentNode.className = "right";
                        if ( i === 1 ){
                            var pwd2 = aInput[2].value;

                            if ( pwd2 ){
                                if ( pwd2 !== val ){
                                    aInput[2].parentNode.className = "wrong";
                                    aInput[2].focus();
                                }else{
                                    aInput[2].parentNode.className = "right";
                                }
                            }
                        }
                    }else{
                        //不满足规则
                        this.parentNode.className = "wrong";
                        this.focus();
                    }
                }else{
                    //没有值
                    this.parentNode.className = "";
                    if ( i === 1 ){
                        if ( aInput[2].value ){
                            aInput[2].parentNode.className = "";
                            aInput[2].value = "";
                        }
                    }
                }

            }

        };
    })(i);
}

//再次输入密码框的获得焦点事件
aInput[2].onfocus = function (ev) {
    var pwdVal = aInput[1].value;
    if ( !pwdVal ){
        clearTimeout(this.timer);
        aInput[1].focus();
        oTip.className = "show";
        this.timer = setTimeout(function () {
            oTip.className = "";
        },1500);
    }
};
