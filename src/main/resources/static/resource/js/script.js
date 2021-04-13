$(document).ready(function () {
        var pageInit = {
            init: function () {
                var i = 0;
                while (true) {
                    $(".left-nav-ul").append("<li></li>");
                    if (i > 12) {
                        break
                    }
                    ;i++
                }
                $(".top-item-content-left li:first-child").hover(function () {
                    $(this).addClass("show")
                }, function () {
                    $(this).removeClass("show")
                });
                $(".my_tb").hover(function () {
                    $(this).addClass("show")
                }, function () {
                    $(this).removeClass("show")
                });
                $(".nav-hd").hover(function () {
                    $(this).addClass("fa-futbol-o")
                }, function () {
                    $(this).removeClass("fa-futbol-o")
                })
            }
        };
        pageInit.init();
        let slide_one = {
            repeat: false, cl: true, min: 0, max: 5, currentIndex: 0, slide: $(".tb-slide-bar"), init: function () {
                var _t = this;
                var prev = $(".tb-slide-one-prev"), next = $(".tb-slide-one-next");
                prev.click(function () {
                    _t.prev()
                });
                next.click(function () {
                    _t.next()
                });
                _t.autoplay(4300);
                _t.appendChild()
            }, autoplay: function (delay) {
                if (delay >= 800 && delay != null) {
                    let time = null;
                    let play = () => {
                        time = setTimeout(() => {
                            window.requestAnimationFrame(play);
                            this.next()
                        }, delay)
                    };
                    play();
                    $(".tb-slide-one").hover(function () {
                        if (time != null) {
                            clearTimeout(time)
                        }
                    }, function () {
                        clearTimeout(time);
                        play()
                    })
                }
            }, prev: function () {
                let _t = this;
                _t.currentIndex--;
                if (_t.currentIndex < _t.min) {
                    _t.currentIndex = _t.max - 1;
                    _t.render(_t, _t.max * 530, true);
                    window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                            _t.render(_t, (_t.currentIndex) * 530, false)
                        })
                    })
                } else {
                    window.requestAnimationFrame(() => {
                        _t.render(_t, _t.currentIndex * 530, false)
                    })
                }
                _t.appendChild();
                _t.clone(_t);
                _t.Point(_t.currentIndex)
            }, render: function (e, x, b) {
                let d;
                b ? d = 0 : d = 300;
                e.slide.css({
                    "transform": "translate3d(-" + x + "px,0px,0px)",
                    "transition-duration": d + "ms",
                    "-webkit-backface-visibility": "hidden",
                    "-webkit-perspective": 1000,
                    "position": "absolute",
                    "left": 0
                })
            }, next: function () {
                let _t = this;
                _t.currentIndex++;
                if (_t.currentIndex > _t.max) {
                    _t.repeat = true;
                    _t.currentIndex = _t.min + 1;
                    _t.render(_t, 0, true);
                    window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                            _t.render(_t, 530, false)
                        })
                    })
                } else {
                    window.requestAnimationFrame(() => {
                        _t.render(_t, (_t.currentIndex) * 530, false)
                    })
                }
                _t.appendChild();
                _t.clone(_t);
                _t.Point(_t.currentIndex)
            }, clone: function (t) {
                if (t.cl) {
                    if (t.currentIndex > t.max - 1 || t.currentIndex === 0) {
                        let first = $(".tb-slide-item:first").clone();
                        first.insertAfter($(".tb-slide-item:last"));
                        t.cl = false
                    }
                }
            }, appendChild: function () {
                let items = $(".tb-slide-item").eq(this.currentIndex);
                if (items.children("a").attr("data-id") === undefined) {
                    let _t = this;
                    let n = new Promise(resolve => {
                        resolve(Load);
                    });
                    n.then(res => {
                        res()
                    });

                    function Load() {
                        $.ajax({
                            url: "/media/getPicture",
                            type: "post",
                            data: {"num": _t.currentIndex + 1},
                            success: function (res) {
                                if (res.length <= 0) {
                                    return false
                                } else {
                                    items.append("<a data-id=" + res[0].pno + " href=" + res[0].link + " target='_blank'><img alt='' src=" + res[0].src + "></a>")
                                }
                            }
                        })
                    }
                }
            }, Point: function (index) {
                let i;
                if (this.repeat) {
                    i = index - 1
                } else {
                    i = index
                }
                $(".point li").eq(i).addClass("cur").siblings().removeClass("cur")
            }
        };
        // slide_one.init();
        var stopPro = {
            stop: (o) => {
                o.stopPropagation()
            }
        };
        var search = {
            init: function () {
                var _t = this;
                var time = null;
                $("#keyword").on("input", result);
                $(document).click(function (e) {
                    stopPro.stop(e);
                    $(".reslut").fadeOut(0)
                });
                $(".reslut").click(e => {
                    stopPro.stop(e)
                });
                $("#keyword").click(function (e) {
                    stopPro.stop(e)
                });
                $("#keyword").focus(() => {
                    if ($(".reslut li").length != 0) {
                        $(".reslut").fadeIn(0)
                    }
                });
                let id = null;

                function result() {
                    $(".reslut li").off("click");
                    let vl = $(this).val();
                    clearTimeout(id);
                    new Promise(resolve => {
                        id = setTimeout(() => {
                            resolve(_t.request)
                        }, 250);
                    }).then(e => {
                        e(vl);
                    })
                }
            },
            request: function (val) {
                $.ajax({
                    url: "/search/prev", type: "POST", data: {"keyword": val}, success: function (res) {
                        if (res != null && res.length !== 0) {
                            $(".reslut").empty().fadeIn(0);
                            for (let i = 0; i < res.length; i++) {
                                $(".reslut").append("<li class='reslut-li' data-id=" + res[i].pno + ">" + res[i].name + "</li>")
                            }
                            let index = -1;
                            $("#keyword").on("keydown", function (e) {
                                if (e.keyCode === 40) {
                                    e.preventDefault();
                                    index++;
                                    if (index >= res.length) {
                                        index = 0
                                    }
                                } else if (e.keyCode === 38) {
                                    e.preventDefault();
                                    index--;
                                    if (index < 0) {
                                        index = res.length - 1
                                    }
                                } else {
                                    return
                                }
                                render(index)
                            });
                            $(".reslut-li").on("click", function () {
                                let value = $(this).text();
                                new ResultDeal(value).Search()
                            })
                        } else if (res.length === 0) {
                            $("#keyword").off("keydown");
                            $(".reslut").fadeOut(0).empty()
                        }
                    }
                });
                var render = function (i) {
                    let this_li = $(".reslut-li").eq(i);
                    $("#keyword").val(this_li.text());
                    this_li.addClass("focus").siblings().removeClass("focus")
                }
            }
        };
        search.init();
        var pageBehavior = {
            time: null, init: function () {
                var _ti = this;
                $(".tell-nav a").mouseover(function () {
                    clearTimeout(_ti.time);
                    _ti.time = setTimeout(() => {
                        $(this).addClass("b-bstyle").siblings().removeClass("b-bstyle");
                        $(".tell-ins").eq($(this).index()).fadeIn(0).siblings().fadeOut(0)
                    }, 200)
                })
            }
        };
        pageBehavior.init()
    }
);