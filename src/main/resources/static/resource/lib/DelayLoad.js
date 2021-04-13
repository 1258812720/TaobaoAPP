(function (e) {
    "use strict";

    function LazyLoad(conf) {
        var Agent = navigator.userAgent;
        var isIE = Agent.indexOf("compatible") > -1 && Agent.indexOf("MSIE") > -1;
        if (isIE) {
            window.attachEvent("scroll", Load)
        } else {
            window.addEventListener("scroll", Load, false)
        }
        var imgs = document.querySelectorAll("img[delay='true']");
        var len = imgs.length;
        var an = conf.attr || "_src";
        var th = conf.th || 10;
        var dataList = [];
        let data_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADjCAIAAABPUcw8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI0SURBVHhe7dIxAQAADMOg+ddaEVORDzRwg4BYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIrA98aeUF+T88t0AAAAASUVORK5CYII=";
        var load = document.createElement("style");
        load.innerHTML = ".loading{min-width:50px;min-height:50px}";
        for (var i = 0; i < len; i++) {
            dataList.push(imgs[i].getAttribute(an));
            imgs[i].classList.add("loading");
            imgs[i].setAttribute("src", data_img)
        }
        ;Load();
        document.documentElement.appendChild(load);
        var id = null, delay = conf.delay || 300;

        function Load() {
            //重新获取
            let i_len = imgs.length;
            if (i_len > 0) {
                id = setTimeout(function () {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
                    for (var i = 0; i < i_len; i++) {
                        let _tNode = imgs[i];
                        var top = _tNode.getBoundingClientRect().top || (imgs[i].offsetTop - scrollTop);
                        if (top < window.innerHeight - th && (top > 0)) {
                            if (_tNode.src !== 'undefined' && eval(_tNode.getAttribute("delay")) === true) {
                                _tNode.src = dataList[i];
                                _tNode.removeAttribute(an);
                                _tNode.classList.remove("loading");
                                _tNode.removeAttribute("delay");
                            }
                        }
                    }
                    clearTimeout(id)
                }, delay);
            }
        }
    };window.__proto__.lazy = LazyLoad
})(window);