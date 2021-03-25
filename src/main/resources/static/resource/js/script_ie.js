$(document).ready(function() {

	var pageInit = {
		init: function() {
			var i=0;
			while (true){
				$(".left-nav-ul").append("<li></li>");
				if(i>12){
					break;
				}
				i++;
			}
			$(".top-item-content-left li:first-child").hover(function() {
				$(this).addClass("show");
			}, function() {
				$(this).removeClass("show");
			});
			$(".my_tb").hover(function() {
				$(this).addClass("show");
			}, function() {
				$(this).removeClass("show");
			});
			$(".J_SearchTab-li").click(function() {
				$(this).addClass("select").siblings().removeClass("select");
			});
			$(".nav-hd").hover(function() {
				$(this).addClass("hover");
			}, function() {
				$(this).removeClass("hover");
			})
		}
	};
	pageInit.init();

	//第一个幻灯片
	var slide_one = {
		cl: true,
		min: 0,
		max: 5,
		currentIndex: 0,
		slide: $(".tb-slide-bar"),
		init: function() {
			var _t = this;
			var prev = $(".tb-slide-one-prev"),
				next = $(".tb-slide-one-next");
			prev.click(function() {
				_t.prev();
			});
			next.click(function() {
				_t.next();
			});
			_t.slide.parent().hover(function() {
				prev.fadeIn(0);
				next.fadeIn(0);
			}, function() {
				prev.fadeOut(0);
				next.fadeOut(0);
			});
			//最后执行
			_t.autoplay(4200);
			_t.appendChild();
		},
		autoplay: function(delay) {
			if (delay >= 800 && delay != null) {
				var time = null,t = this;
				var play = function() {
					time = setTimeout(function(){
						window.requestAnimationFrame(play);
						t.next();
					}, delay);
				};
				play();

				this.slide.parent().on("touchstart", function(e) {
					e.preventDefault();
				});

				this.slide.parent().hover(function() {
					if (time != null) {
						clearTimeout(time);
					}
				}, function() {
					clearTimeout(time);
					play();
				});
			}
		},
		prev: function() {
			var _t = this;
			_t.currentIndex--;
			if (_t.currentIndex < _t.min) {
				_t.currentIndex = _t.max - 1;
				_t.slide.css({
					"transform": "translate3d(-" + (_t.max * 530) + "px,0px,0px)",
					"transition": "all 0ms ",
				});
				window.requestAnimationFrame(function()  {
					window.requestAnimationFrame(function() {
						_t.slide.css({
							"transform": "translate3d(-" + ((_t.currentIndex) * 530) + "px,0px,0px)",
							"transition": "all .3s ease"
						});
					})
				})
			} else {
				_t.slide.css({
					"transform": "translate3d(-" + (_t.currentIndex * 530) + "px,0px,0px)",
					"transition": "all .3s ease"
				});
			}
			_t.appendChild();
			_t.clone(_t);
		},
		next: function() {
			var _t = this;
			_t.currentIndex += 1;
			if (_t.currentIndex > _t.max) {
				_t.currentIndex = _t.min + 1;
				_t.slide.css({
					"transform": "translate3d(0px,0px,0px)",
					"transition": "all 0s ease"
				});
				window.requestAnimationFrame(function() {
					window.requestAnimationFrame(function() {
						_t.slide.css({
							"transform": "translate3d(-530px,0px,0px)",
							"transition": "all .3s ease"
						});
					});
				});
			} else {
				_t.slide.css({
					"transform": "translate3d(-" + ((_t.currentIndex) * 530) + "px,0px,0px)",
					"transition": "all .3s ease"
				});
			}
			_t.appendChild();
			_t.clone(_t);
		},
		clone: function(t) {
			if (t.cl === true) {
				if (t.currentIndex > t.max - 1) {
					var first = $(".tb-slide-item:first").clone();
					first.insertAfter($(".tb-slide-item:last"));
					t.cl = false;
				}
			}
		},
		appendChild: function() {
			var items = $(".tb-slide-item").eq(this.currentIndex);
			if (items.children("a").attr("data-id") === undefined) {
				var _t = this;
				setTimeout(function() {
					$.ajax({
						url: "http://localhost:8080/media/getPicture",
						type: "post",
						data: {
							"num": _t.currentIndex + 1
						},
						success: function(res) {
							if (res.length <= 0) {

							} else {
								items.append("<a data-id=" + res[0].pno + " href=" + res[0].link +
									" target='_blank'><img src=" + res[0].img_src + "></a>")
							}
						}
					});
				}, 300);
			}
		}
	};
	slide_one.init();

	//阻止冒泡
	var stopPro = {
		stop: function(o){
			o.stopPropagation();
		}
	};


	//搜索
	var search = {
		init: function() {
			var _t = this;
			var time = null;
			$("#keyword").on("keyup", result);
			$(document).click(function(e) {
				stopPro.stop(e);
				$(".reslut").fadeOut(0);
			});
			$(".reslut").click(function(e) {
				stopPro.stop(e);
			});
			$("#keyword").click(function(e) {
				stopPro.stop(e);
			});
			$("#keyword").focus(function(){
				if ($(".reslut li").length != 0) {
					$(".reslut").fadeIn(0);
				}
			});

			function result() {
				var vl = $(this).val();
				clearTimeout(time);
				time = setTimeout(function() {
					_t.request(vl);
				}, 400);

			}
		},
		request: function(val) {
			$.ajax({
				url: "http://localhost:8080/search/prev",
				type: "POST",
				data: {
					"keyword": val
				},
				success: function(res) {
					if (res != null && res.length !== 0) {
						$(".reslut").empty().fadeIn(0);
						for (var i = 0; i < res.length; i++) {
							$(".reslut").append("<li data-id=" + res[i].pno + ">" + res[i].text + "</li>");
						}
					} else if (res.length == 0) {
						$(".reslut").fadeOut(0).empty();
					}

				}
			})
		}
	};
	search.init();
	var pageBehavior = {
		time: null,
		init: function() {
			var _ti = this;
			$(".tell-nav a").mouseover(function() {
				clearTimeout(_ti.time);
				_ti.time = setTimeout(function() {
					$(".tell-nav a").addClass("b-bstyle").siblings().removeClass("b-bstyle");
					$(".tell-ins").eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
				}, 200);
			});
		}
	};
	pageBehavior.init();
});
