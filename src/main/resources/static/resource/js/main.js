$(document).ready(function () {
    var search = {
        init: function () {
            if ($("#keyword").val().length !== 0) {
                $(".biger").fadeOut(0)
            }
            $("#keyword").bind("focus", function () {
                $(this).on("input", function (e) {
                    var val = $(this).val().replace(/\s*/g, "");
                    if (val.length > 0) {
                        $(".biger").fadeOut(0)
                    } else {
                        $(".biger").fadeIn(0)
                    }
                })
            })
        },
    };
    search.init();
    var slide_two = {
        dis: $(".tb-slide-two").width(),
        node: $(".tb-slide-bars"),
        index: 0,
        finish: false,
        max: 5,
        dur: 300,
        init: function () {
            var _t = this;
            _t.node.css({width: _t.dis * 6 + "px"});
            $(".tb-slide-two-prev").click(function () {
                _t.prev()
            });
            $(".tb-slide-two-next").click(function () {
                _t.next()
            });
            this.autoplay();
            this.appendChild(this.index);
            let len = $(".tb-slide-two-item").length, ns = $(".tb-slide-two-item");
            for (let i = 0; i < len; i++) {
                let te = ns.eq(i);
                for (let j = 0; j < 2; j++) {
                    te.append("<ins class='radius hidden'></ins>")
                }
            }
        },
        autoplay: function () {
            var time = null, request = null, t = this;
            var play = function () {
                time = setTimeout(function () {
                    request = window.requestAnimationFrame(play);
                    t.next()
                }, 4300)
            };
            play();
            $(".tb-slide-two").hover(function () {
                if (time != null) {
                    clearTimeout(time);
                    cancelAnimationFrame(request)
                }
            }, function () {
                play()
            })
        },
        prev: function () {
            this.index--;
            if (this.index < 0) {
                this.index = this.max - 1;
                this.node.css({
                    transform: "translate3d(-" + (this.max * this.dis) + "px,0px,0px)",
                    "transition-duration": "0ms",
                });
                this.requestAnimation(530 * 4)
            } else {
                this.play()
            }
        },
        next: function () {
            this.index++;
            if (this.index > this.max) {
                this.index = 1;
                this.node.css({transform: "translate3d(0px,0px,0px)", "transition-duration": "0ms",});
                this.requestAnimation(530)
            } else {
                this.play()
            }
        },
        play: function () {
            this.node.css({
                transform: "translate3d(-" + (this.index * this.dis) + "px,0px,0px)",
                "transition-duration": this.dur + "ms",
            });
            if ((!this.finish && this.index < 1) || (!this.finish && this.index >= this.max)) {
                this.node.append($(".tb-slide-two-item").first().clone())
            }
            if (this.index <= 0 || this.index >= this.max) {
                this.finish = true
            }
            this.appendChild(this.index)
        },
        requestAnimation: function (obj) {
            var _t = this;
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    _t.node.css({
                        transform: "translate3d(-" + obj + "px,0px,0px)",
                        "transition-duration": _t.dur + "ms",
                    })
                })
            })
        },
        appendChild(index) {
            let t = this;
            let load = function () {
                $.ajax({
                    url: "/media/swiper", data: {"page": index + 1}, method: "GET", success(res) {
                        let b = t.node.children(".tb-slide-two-item").eq(t.index);
                        for (let i = 0; i < res.length; i++) {
                            let f = $("<a href=" + res[i].link + "target='_blank'><img src=" + res[i].src + "></a>");
                            b.children("ins").eq(i).append(f)
                        }
                    }
                })
            };
            if (!this.finish) {
                new Promise(resolve => {
                    resolve(load)
                }).then(e => {
                    e()
                })
            }
        }
    };
    slide_two.init();
    var S = KISSY;
    var srcPath = "../../../";
    if (S.debug) {
        S.config({
            packages: [{
                name: "gallery",
                path: srcPath,
                charset: "utf-8",
                combine: false,
                tag: S.now(),
                ignorePackageNameInUri: true,
                debug: true
            }]
        });
    }

    KISSY.use('gallery/slide/1.3/index', function (S, Slide) {
        C = new Slide('slide', {
            autoSlide: true,
            hoverStop: true,
            effect: 'hSlide',
            timeout: 3400,
            speed: 300,
            invisibleStop: true,
            eventType: 'click',
            triggerDelay: 0,
            carousel: true,
            defaultTab: 5,
            selectedClass: 'current',
            touchmove: true
        }).on('afterSwitch', function () {
        });
        S.one('#J_pre').on('click', function (e) {
            e.halt();
            C.previous();
            if (C.autoSlide && C.stoped === false) {
                C.stop().play();
            }
        });
        S.one('#J_next').on('click', function (e) {
            e.halt();
            C.next();
            if (C.autoSlide && C.stoped === false) {
                C.stop().play();
            }
        });

    });
});
