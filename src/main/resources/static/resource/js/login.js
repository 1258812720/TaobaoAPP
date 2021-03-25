$(document).ready(function () {
    //Login
    function isEmpty(d) {
        if (d.val().trim().length !== 0) {
            return true;
        } else {
            return false;
        }
    }

    var btn = $("#lg-btn"), id = null;
    var request = function (data) {
        $.ajax({
            url: "../sign_in",
            type: "post",
            data: {
                "username": data[0],
                "password": data[1]
            }, success: function (info) {
                //登录成功
                if (eval(info)) {
                    btn.text("登录成功");
                    setTimeout(function () {
                        window.open("/", "_self");
                    }, 150);
                } else {
                    //登录失败
                    btn.text("登录失败");
                    setTimeout(function () {
                        btn.text("登录");
                    }, 1000);
                }
            }
        })
    }

    btn.click(function () {
        Login();
    });
    document.getElementsByClassName("login-box")[0].addEventListener("keydown", function (e) {
        let k = e.code;
        if (k === 'Enter' || k === "NumpadEnter") {
            e.preventDefault();
            Login();
        }
    })

    function Login() {
        clearTimeout(id);
        id = setTimeout(function()  {
            var arr = [], info = $(".info");
            if (isEmpty(info.eq(0)) && isEmpty(info.eq(1))) {
                arr.push(info.eq(0).val().trim());
                arr.push(info.eq(1).val().trim());
                if (arr.length !== 0) {
                    request(arr);
                }
            }
        }, 200);//防抖
    }
})