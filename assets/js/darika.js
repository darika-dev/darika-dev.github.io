/*! DariKa v1.0 | (c) 2015 DariKa
*/
jQuery(window).load(function() {
    jQuery("#loader").fadeOut("slow");
    equalheight(".skills .inner");
    var e = 0;
    var d = $(window).height();
    var b = $(window).width();
    var c = d - 100;
    $(".home, .home .text").css("height", d);
    var a = d / 2;
    $(".flex-direction-nav a").css("top", (a + "px"));
    e = $(this).scrollTop();
    if (e > 20) {
        $("header").stop().animate({
            backgroundColor: "#111111"
        }, 300)
    } else {
        $("header").stop().animate({
            backgroundColor: "transparent"
        }, 300)
    }
});
$(document).ready(function() {
    $(".home button").click(function(j) {
        var i = $(".about").offset().top;
        $("html,body").animate({
            scrollTop: i - 70
        }, "slow");
        return false
    });
    $("#navigation ul a, .logo a, .arrow a").click(function(l) {
        var j = $(window).width();
        if (j <= 767) {
            $("#navigation ul").slideUp("fast")
        }
        var i = $(this).attr("href");
        var k = $(i).offset().top;
        $("html,body").animate({
            scrollTop: k - 70
        }, "slow");
        return false
    });
    $(".social li").click(function() {
        var i = $(this).attr("data-url");
        window.open(i, "_blank")
    });
    var h = 0;
    var g = $(window).height();
    var f = g - 100;
    $(".home").css("height", f);
    $(".home .overlay").css("height", g);
    $(document).scroll(function() {
        h = $(this).scrollTop();
        if (h > 20) {
            $("header").stop().animate({
                backgroundColor: "#111111"
            }, 300)
        } else {
            $("header").stop().animate({
                backgroundColor: "transparent"
            }, 300)
        }
    });
    var d = "15%";
    $("section").waypoint({
        handler: function(j, k) {
            var i = $(this);
            if (k === "up") {
                i = i.prev()
            }
            if (k === "up") {
                d = "30%"
            }
            if (typeof i.attr("id") != "undefined") {
                $("#navigation a").removeClass("active");
                $('#navigation a[href="#' + i.attr("id") + '"]').addClass("active")
            }
        },
        offset: d
    });
    $('#contact').waypoint(function(j, k) {
    	if (k === "down") {
		  	$("#navigation a").removeClass("active");
    	    $('#navigation li:last-child a').addClass("active")
    	} else {
    		$("#navigation a").removeClass("active");
    	    $('#navigation li:nth-last-child(2) a').addClass("active")
    	};
	}, { offset: 'bottom-in-view' });




    $(".logo").click(function(j) {
        var i = $("#home").offset().top;
        $("html,body").animate({
            scrollTop: i - 70
        }, "slow", "easeOutQuint");
        return false
    });
    
    var e = false;
    $(".mobile-navigation").click(function() {
        if (e == false) {
            $("#navigation ul").slideDown("fast");
            $("header").stop().animate({
                backgroundColor: "#111111"
            }, 300);
            e = true;
            return false
        } else {
            $("#navigation ul").slideUp("fast");
            h = $(window).scrollTop();
            if (h > 20) {
                $("header").stop().animate({
                    backgroundColor: "#111111"
                }, 300)
            } else {
                $("header").stop().animate({
                    backgroundColor: "transparent"
                }, 300)
            }
            e = false;
            return false
        }
    });
    
    var c = $("div.skills");
    $("div.skills").hover(function() {
        c.stop().animate({
            opacity: 0.3
        }, "fast");
        $(this).stop().animate({
            opacity: 1
        }, "fast")
    }, function() {
        c.stop().animate({
            opacity: 1
        }, "fast")
    });

});
$(window).resize(function() {
    equalheight(".skills .inner")
});
equalheight = function(b) {
    var a = 0, c = 0, f = new Array(), e, d = 0;
    $(b).each(function() {
        e = $(this);
        $(e).height("auto");
        topPostion = e.position().top;
        if (c != topPostion) {
            for (currentDiv = 0; currentDiv < f.length; currentDiv++) {
                f[currentDiv].height(a)
            }
            f.length = 0;
            c = topPostion;
            a = e.height();
            f.push(e)
        } else {
            f.push(e);
            a = (a < e.height()) ? (e.height()) : (a)
        }
        for (currentDiv = 0; currentDiv < f.length; currentDiv++) {
            f[currentDiv].height(a)
        }
    })
};

