$(document).ready(function () {
    var size = {
        init: function () {
            $(window).on("resize", function () {
                resize();
                $(".tb-slide-bar,.tb-slide-bars").css({transition: "all 0s"})
            });
            var resize = function () {
                let mattern = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
                if (navigator.userAgent.match(mattern)) {
                    return false;
                }
            }
        }
    };
    size.init();
    var pageScroll = {
        init: function () {
            var jf = $(".jFrame-top");
            var jftop = jf.offset().top;
            var serchnav = $(".search-nav");
            var navtop = serchnav.offset().top;
            $(window).on("scroll", function () {
                var scollTop = $(document).scrollTop();
                if (scollTop - navtop > 44) {
                    serchnav.addClass("fixed");
                    $(".main-content").addClass("down");
                    if (((scollTop + 72) <= jftop)) {
                        jf.removeClass("float")
                    } else {
                        jf.addClass("float")
                    }
                } else {
                    serchnav.removeClass("fixed");
                    $(".main-content").removeClass("down")
                }
            })
        }
    };
    pageScroll.init();
    var backtop = function (endY) {
        var page = document.documentElement, time = null, request = null;
        let t_h = page.scrollTop;
        var back = function () {
            time = setTimeout(function () {
                let speed = page.scrollTop / 8;
                request = window.requestAnimationFrame(back) || window.webkitRequestAnimationFrame(back) || window.mozRequestAnimationFrame(back) || window.oRequestAnimationFrame(back) || window.msRequestAnimationFrame(back);
                page.scrollTop -= speed || $("html,body").animate({"scrollTop": 0}, 400);
                if (Math.floor(page.scrollTop) <= endY) {
                    stop()
                }
            }, 5)
        };
        var stop = function () {
            clearTimeout(time);
            cancelAnimationFrame(request);
            clearInterval(time)
        };
        back();
        let MouseScroll = function (e) {
            e = e || window.event;
            let wheel = e.wheelDelta | e.detail;
            if (wheel > 0) {
                stop()
            } else {
                stop()
            }
        };
        window.addEventListener("DOMMouseScroll", MouseScroll, false);
        window.onmousewheel = MouseScroll
    };
    $(".backtop"
    ).click(function () {
        backtop(0)
    });
    $(".tell-ins:first").fadeIn(0);
    let r = function () {
        let area = ["全球", "中国大陆", "中国香港", "中国台湾", "中国澳门", "韩国", "马来西亚", "澳大利亚", "新加坡", "新西兰", "加拿大", "美国", "日本"];
        let site = $(".site-nav-region");
        for (let i = 0; i < area.length; i++) {
            let span = $('<span class="site-nav-region-item" role="option">' + area[i] + '</span>');
            site.append(span)
        }
    };
    r();
    var logout = {
        b: $(".logout a"), clear: function () {
            this.b.click(function () {
                Cookies.remove("u_pw");
                Cookies.remove("u_id");
                Cookies.remove("td_session");
                $.post("/logout", "POST", function () {
                    location.reload()
                })
            });
            this.b.children("a").first().hover(function () {
                $(".logout").fadeIn(0)
            })
        }
    };
    logout.clear()
});