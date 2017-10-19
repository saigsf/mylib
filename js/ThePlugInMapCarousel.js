function carousel(data) {
    /**
     * 基于jQuery
     * data 格式为json
     * data={
     *      a
     * 
     * 
     * }
     */
    // 元素
    var a = data.a || null;
    if (!a) {
        return;
    }
    // 模式
    var b = data.b || 0;
    // 宽和高
    var c = data.c || a.width();
    var d = data.d || a.height();
    //切换速度
    var e = data.e || 5000;

    // 循环
    var timer = null;
    // 信号量
    var index = 0;

    // 初始化方法
    function init() {
        var windowW = document.documentElement.clientWidth;
        a.parents(".carousel").height(windowW / 2);

        // 宽和高
        c = a.width();
        d = a.height();
        a.eq(index).show();

    }
    init();
    window.onresize = function() {
        init();
    }

    // 运动模式
    var moveModule = {
        toLeft: function(o, index) {
            var newIndex = (index + 1) % 5;

            // console.log(o.eq(newIndex));
            o.eq(newIndex).css({
                "left": c,
                "display": "block"

            }).animate({
                "left": 0
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);
            o.eq(index).animate({
                "left": -c
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "left": 0
                });
            });
        },
        toUp: function(o, index) {
            var newIndex = (index + 1) % 5;
            //console.log(o.eq(newIndex));
            o.eq(newIndex).css({
                "top": d,
                "display": "block"

            }).animate({
                "top": 0
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);
            o.eq(index).animate({
                "top": -d
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "top": 0
                });
            });

        },
        toRight: function(o, index) {
            var newIndex = (index + 1) % 5;
            //console.log(o.eq(newIndex));
            o.eq(newIndex).css({
                "left": -c,
                "display": "block"

            }).animate({
                "left": 0
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);
            o.eq(index).animate({
                "left": c
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "left": 0
                });
            });

        },
        toDown: function(o, index) {
            var newIndex = (index + 1) % 5;
            //console.log(o.eq(newIndex));
            o.eq(newIndex).css({
                "top": -d,
                "display": "block"

            }).animate({
                "top": 0
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "top": d
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "top": 0
                });
            });

        },
        breath: function(o, index) {
            var newIndex = (index + 1) % 5;
            o.eq(newIndex).css({
                "opacity": 0,
                "display": "block"

            }).animate({
                "opacity": 1
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "opacity": 0
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "opacity": 1
                });
            });

        },
        enlargeLT: function(o, index) {
            var newIndex = (index + 1) % 5;
            o.eq(newIndex).css({
                "width": 0,
                "height": 0,
                "display": "block"

            }).animate({
                "width": c,
                "height": d
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "opacity": 0
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "opacity": 1
                });
            });


        },
        enlargeRT: function(o, index) {
            var newIndex = (index + 1) % 5;
            o.eq(newIndex).css({
                "width": 0,
                "height": 0,
                "top": 0,
                "left": c,
                "display": "block"

            }).animate({
                "width": c,
                "height": d,
                "left": 0


            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "opacity": 0
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "opacity": 1
                });
            });


        },
        enlargeRB: function(o, index) {
            var newIndex = (index + 1) % 5;
            o.eq(newIndex).css({
                "width": 0,
                "height": 0,
                "top": d,
                "left": c,
                "display": "block"

            }).animate({
                "top": 0,
                "left": 0,
                "width": c,
                "height": d
            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "opacity": 0
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "opacity": 1
                });
            });


        },
        enlargeLB: function(o, index) {
            var newIndex = (index + 1) % 5;
            o.eq(newIndex).css({
                "width": 0,
                "height": 0,
                "top": d,
                "left": 0,
                "display": "block"

            }).animate({
                "width": c,
                "height": d,
                "top": 0

            }, 1000);
            o.eq(newIndex).find("img").css("opacity", 1);

            o.eq(index).animate({
                "opacity": 0
            }, 1000, function() {

                $(this).css({
                    "display": "none",
                    "opacity": 1
                });
            });


        },
        shutter: function(o, index) {
            var sum = 0;
            var newIndex = (index + 1) % 5;
            addColumn(o.eq(index));
            o.eq(index).find("img").css("opacity", 0);
            o.eq(index).css({
                "display": "block",
                "z-index": 0
            }).children(".inner").each(function(i) {

                $(this).delay(i * 100).animate({
                    "opacity": 0,
                }, 400);
            });
            o.eq(newIndex).css({
                "display": "block",
                "z-index": -1111,
                "opacity": 0
            }).animate({
                "opacity": 1
            }, 2000);
            o.eq(newIndex).find("img").css("opacity", 1);



        }

    }

    // 添加图片分栏
    function addColumn(o) {
        o.find(".inner").remove();
        var src = o.find("img").attr("src");


        for (var i = 0; i < 10; i++) {
            var oDiv = $("<div class='inner'></div>");
            oDiv.css({
                "backgroundImage": "url(" + src + ")",
                "backgroundSize": "" + c + "px " + d + "px",
                "backgroundPosition": -c * i / 10 + "px 0px ",
                "position": "absolute",
                "top": 0,
                "left": c * i / 10,
                "width": c / 10,
                "height": d,
                "opacity": 1


            });
            o.append(oDiv);



        }

    }

    // 运动方法
    function move(b, index) {
        switch (b) {
            case 1:
                moveModule.toLeft(a, index);
                break;
            case 2:
                moveModule.toUp(a, index);
                break;
            case 3:
                moveModule.toRight(a, index);
                break;
            case 4:
                moveModule.toDown(a, index);
                break;
            case 5:
                moveModule.breath(a, index);
                break;
            case 6:
                moveModule.enlargeLT(a, index);
                break;
            case 7:
                moveModule.enlargeRT(a, index);
                break;
            case 8:
                moveModule.enlargeRB(a, index);
                break;
            case 9:
                moveModule.enlargeLB(a, index);
                break;
            case 10:
                moveModule.shutter(a, index);
                break;
            default:
                break;
        }

    }

    //run(b);

    function run(b) {
        move(b, index);
        index++;
        if (index > a.length - 1) {
            index = 0;
        }

    }
    // 循环执行
    timer = setInterval(function() {
        b = b === 0 ? Math.floor(Math.random() * 9 + 1) : b;
        run(b);
    }, e);







}