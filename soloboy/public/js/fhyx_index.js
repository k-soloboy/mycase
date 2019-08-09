(function () {
    var iNow = 0;
    $(".fhyxhk_banner").eq(0).css({ opacity: 1, zIndex: 1 });
    var timer = setInterval(function () {
        autostart();
    }, 5000);
    $(".fhyxhk_banner_c").hover(
        function () {
            clearInterval(timer);
            $(".banner_btn").show();
        },
        function () {
            timer = setInterval(function () {
                autostart();
            }, 5000);
            $(".banner_btn").hide();
        }
    );
    function autostart() {
        iNow++;
        if (iNow > $(".fhyxhk_banner").length - 1) {
            iNow = 0;
        }
        showpic(iNow);
    }
    $(".fhyx_banner_cleft").on("click", function (event) {
        iNow--;
        if (iNow < 0) {
            iNow = $(".fhyxhk_banner").length - 1;
        }
        showpic(iNow);
        event.stopPropagation();
    });
    $(".fhyx_banner_cright").on("click", function (event) {
        iNow++;
        if (iNow > $(".fhyxhk_banner").length - 1) {
            iNow = 0;
        }
        showpic(iNow);
        event.stopPropagation();
    });
    function showpic(index) {
        $(".fhyxhk_banner").css("zIndex", 0);
        for (var j = 0; j < $(".fhyxhk_banner").length; j++) {
            if (j != index) $(".fhyxhk_banner").eq(j).animate({ opacity: 0 }, 1000);
        }
        $(".fhyxhk_banner").eq(index).animate({ opacity: 1 }, 1000);
        $(".fhyxhk_banner").eq(index).css("zIndex", 1);
    }
})();

(function () {

    var iLen = $(".fhyxhk_zxss_list li").length;
    var iWidth = iLen * 225;
    var iLwidth = $(".fhyxhk_zxss_list").width();
    var iCwidth = 5 * 225;
    var iNow = 0;
    var iStatus = 1;
    var iLeft = 0;
    $(".fhyxhk_zxss_list ul").width(iWidth);
    $(".fhyxhk_zxss_btn_r").bind("click", function () {
        if (iStatus == 1) {
            iStatus = 0;
            if ((iNow + 1) * iCwidth + iLwidth < iWidth - 10) {
                iNow++;
                iLeft = -iNow * iCwidth;
            } else {
                iLeft = -(iWidth - 50 - iLwidth);
            }
            $(".fhyxhk_zxss_list ul").animate({ left: iLeft }, 200, function () {
                iStatus = 1;
                if (iLeft == -(iWidth - 50 - iLwidth)) {
                    $(".fhyxhk_zxss_btn_r").hide();
                    $(".fhyxhk_zxss_btn_l").show();
                } else {
                    $(".fhyxhk_zxss_btn_r").show();
                    $(".fhyxhk_zxss_btn_l").show();
                }
            });
        }
    });
    $(".fhyxhk_zxss_btn_l").bind("click", function () {
        if (iStatus == 1) {
            iStatus = 0;
            if (iCwidth < Math.abs(parseInt($(".fhyxhk_zxss_list ul").css("left")))) {
                iLeft = -iNow * iCwidth;
                iNow--;
            } else {
                iLeft = 0;

            }
            $(".fhyxhk_zxss_list ul").animate({ left: iLeft }, 200, function () {
                iStatus = 1;
                if (iLeft == 0) {
                    $(".fhyxhk_zxss_btn_l").hide();
                    $(".fhyxhk_zxss_btn_r").show();
                } else {
                    $(".fhyxhk_zxss_btn_r").show();
                    $(".fhyxhk_zxss_btn_l").show();
                }
            });
        }
    });
    $(".fhyxhk_zxss_list li").hover(
        function () {
            $(this).addClass("li_active");
        },
        function () {
            $(this).removeClass("li_active");
        }
    );
})();

function SlideToggleAd() {
    this.html = $('.adfhyxSlideToggle');
    this.wrap = this.html.find('ul');
    var aniTime = 700, me = this;
    var n = 700,
        t = null;
    $(".ad-slide-list .item").hover(function () {
        var innerWrap = $(this);


        var targetMarginLeft = $(this).index() * 306;
        innerWrap.stop().animate({ width: 1210 }, aniTime);
        innerWrap.find('.c2').stop().animate({ width: 902 }, aniTime);
        me.wrap.stop().animate({
            'margin-left': -targetMarginLeft
        }, aniTime);
    }, function () {
        var innerWrap = $(this);
        me.wrap.stop().animate({ 'margin-left': 0 }, aniTime);
        innerWrap.find('.c2').stop().animate({ width: 0 }, aniTime);
        innerWrap.stop().animate({ width: 306 }, aniTime);
    }

    )
}

$(function () {
    SlideToggleAd();
})

$(".fhyxhk_jjss_block_left").bind("click", function () {
    $(".fhyxhk_jjss_block ul").animate({ left: 0 }, 300, function () {
        $(".fhyxhk_jjss_block").css("left", 0);
        $(".fhyxhk_jjss_block_left").hide();
        $(".fhyxhk_jjss_block_right").show();
    });
});
$(".fhyxhk_jjss_block_right").bind("click", function () {
    $(".fhyxhk_jjss_block ul").animate({ left: -1164 }, 300, function () {
        $(".fhyxhk_jjss_block").css("left", 58);
        $(".fhyxhk_jjss_block_right").hide();
        $(".fhyxhk_jjss_block_left").show();
    });
});
$(".fhyxhk_jjss_block li").bind("mouseover", function () {
    $(".fhyxhk_jjss_block li").removeClass("li_active");
    $(this).addClass("li_active");
    $(".fhyxhk_jjss_block li i").css({ "background": "#dbdbdb" });
    $(this).find("i").css({ "background": "#ff3600" });
    showjjss($(this).index());
});
showjjss(0);
function showjjss(index) {

    var jjssstr = "";

    jjssstr = '<div class="jjss_pt"><label class="h_steam hk_fhyx_l"></label></div><div class="fhyxhk_jjss_infomation_left"><a href="' + jjssdata[index]['id'] + '" target="_blank"><img src="' + jjssdata[index]['img'] + '" width="460" height="215"/></a></div><div class="fhyxhk_jjss_infomation_right"><div class="fhyxhk_jjss_infomation_t"><a href="' + jjssdata[index]['id'] + '" target="_blank">' + jjssdata[index]['title'] + '</a></div><div class="fhyxhk_jjss_infomation_e">' + jjssdata[index]['etitle'] + '</div><div class="fhyxhk_jjss_infomation_c">制作公司：' + jjssdata[index]['maker'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发行公司：' + jjssdata[index]['company'] + '</div><div class="fhyxhk_jjss_tag">游戏标签：' + jjssdata[index]['tag'] + '</div><div class="fhyxhk_jjss_infomation_d">' + jjssdata[index]['info'] + '</div><a href="' + jjssdata[index]['id'] + '" target="_blank" class="jjss_detail">查看详情</a></div>';

    $(".fhyxhk_jjss_infomation").html(jjssstr);

}


(function () {

    var rlen = rmdata.length;

    var rbtn = "";

    var iNow = 0;

    for (var i = 0; i < rlen; i++) {
        rbtn += '<span ' + (i == 0 ? 'class="active"' : '') + '></span>';
    }
    $(".fhyxhk_rmjx_btn").html(rbtn);
    showrmhd(0);
    $(".fhyxhk_rmjx_btn span").bind("mouseover", function () {
        showrmhd($(this).index());

    });
    $(".fhyxhk_rmjx_bottom_b").hover(
        function () {
            $(".fhyxhk_rmjx_bot").eq($(this).index()).show();
            $(".fhyxhk_rmjx_shodow").eq($(this).index()).show();
        },
        function () {
            $(".fhyxhk_rmjx_bot").eq($(this).index()).hide();
            $(".fhyxhk_rmjx_shodow").eq($(this).index()).hide();
        }
    );
    $(".fhyxhk_rmjx_l").bind("mouseover", function () {
        clearInterval(timer);
    });
    $(".fhyxhk_rmjx_l").bind("mouseout", function () {
        timer = setInterval(function () {
            iNow++;
            if (iNow > $(".fhyxhk_rmjx_btn span").length - 1) {
                iNow = 0;
            }
            showrmhd(iNow);
        }, 5000);
    });
    var timer = setInterval(function () {
        iNow++;
        if (iNow > $(".fhyxhk_rmjx_btn span").length - 1) {
            iNow = 0;
        }
        showrmhd(iNow);
    }, 5000);
    function showrmhd(index) {

        $(".fhyxhk_rmjx_info").html('<div class="fhyxhk_rmjx_per">' + rmdata[index]['zk'] + '</div><div class="fhyxhk_rmjx_price"><span>¥' + rmdata[index]['oldprice'] + '</span><br/><label>¥' + rmdata[index]['price'] + '</label></div>');
        $(".fhyxhk_rmjx_l ul").html('<li><a href="/item/' + rmdata[index]['id'] + '.html" target="_blank"><img src="' + rmdata[index]['img'] + '" width="790" height="440"/></a></li>');
        $(".fhyxhk_rmjx_btn span").removeClass("active");
        $(".fhyxhk_rmjx_btn span").eq(index).addClass("active");
        iNow = index;
    }
    function showtime() {
        var oDate = new Date();
        var iTime = oDate.getTime();
        var addtime = $(".fhyxhk_rmjx_r_pro").attr("data-addtime");
        var endtime = $(".fhyxhk_rmjx_r_pro").attr("data-endtime");
        var percent = (((iTime - addtime) / (endtime - addtime)) * 100);
        if (percent < 100) {
            $(".fhyxhk_rmjx_r_pro span").width(percent + '%');
        } else {
            $(".fhyxhk_rmjx_r_pro span").width('100%');
            $(".fhyxhk_rmjx_r_pro label").html("活动已结束");
            clearInterval(itimer);
        }

    }

    showtime();

    var itimer = setInterval(showtime, 1000);

})();


showzk(0);
$(".zkcx_nav_con").bind("mouseover", function () {
    $(".zkcx_nav_con").removeClass("pactive");
    $(this).addClass("pactive");
    showzk($(this).index());
});
function showzk(index) {
    var zkstr = "";
    for (var i = 0; i < zkdata[index].length; i++) {
        zkstr += '<a href="/item/' + zkdata[index][i]['id'] + '.html" target="_blank" class="fhyxhk_zkcx_list" ' + ((i + 1) % 3 == 0 ? 'style="margin-right:0px;"' : '') + '><div class="fhyxhk_zkcx_li"><div class="fhyxhk_zkcx_info"><div class="fhyxhk_zkcx_img"><img src="' + zkdata[index][i]['img'] + '" width="205" height="96"/></div><div class="fhyxhk_zkcx_des"><div class="fhyxhk_zkcx_t">' + zkdata[index][i]['name'] + '</div><div class="fhyxhk_zkcx_e">' + zkdata[index][i]['etitle'] + '</div><div class="fhyxhk_zkcx_b"><div class="zkcx_price">¥' + zkdata[index][i]['price'] + '</div><div class="zkcx_old">¥' + zkdata[index][i]['oldprice'] + '</div><div class="zkcx_pre">' + zkdata[index][i]['zk'] + '</div></div></div></div></div></a>';
    }
    $(".fhyxhk_zkcx_con").html(zkstr);
}

$(".fhyx_zhuji_list_c").hover(
    function () {
        $(this).find(".fhyx_zhuji_li").addClass("zjactive");
        $(this).find(".fhyx_zhuji_li").animate({ zIndex: 1 }, 100);
        $(this).find(".fhyx_zhuji_li").animate({ opacity: 1 }, 300);
    },
    function () {
        $(this).find(".fhyx_zhuji_li").removeClass("zjactive");
        $(this).find(".fhyx_zhuji_li").animate({ opacity: 0, zIndex: -1 }, 300);
    }
);

(function () {
    var iLen = $(".fhyx_cs_list li").length;
    var totalWidth = (210 + 15) * iLen;
    var cWidth = (210 + 15) * 5;
    var sLen = Math.ceil((totalWidth - $(".fhyx_cs_list").width()) / cWidth);
    var iNow = 0;
    var iLeft = 0;
    // console.log(sLen);
    // $(".fhyx_cs_list ul").width(totalWidth);
    // $(".fhyx_cs_left").on("click",function(){
    //     iNow--;
    //     if(iNow<=0){
    //        iNow=0;
    //        iLeft=0;
    //     }else{
    //        iLeft=-iNow*cWidth;
    //     }
    //     $(".fhyx_cs_list ul").animate({left:iLeft},1000);
    // });
    // $(".fhyx_cs_right").on("click",function(){
    //     iNow++;
    //     if(iNow>=sLen){
    //        iNow=sLen;
    //        iLeft=cWidth-totalWidth;
    //     }else{
    //        iLeft=-iNow*cWidth;
    //     }
    //     $(".fhyx_cs_list ul").animate({left:iLeft},1000);
    // });
    // var DEFAULT_VERSION = 8.0;  
    var ua = navigator.userAgent.toLowerCase();  
    var isIE = ua.indexOf("msie")>-1;  
    var fastTime = 250, slow = 8000;
    function animateLeft(time) {
        $(".fhyx_cs_list ul").animate({
            left: -225
        }, time, 'linear', function () {
            $(".fhyx_cs_list ul").append($(".fhyx_cs_list li").eq(0));
            $(".fhyx_cs_list ul").css('left', 0);
            if(isIE){
                setTimeout(function(){animateLeft(time)}, time)
            }else{
                setTimeout(animateLeft(time), time)
            }
        })
    }
    animateLeft(slow);
    function animateRight(time) {
        $(".fhyx_cs_list ul").prepend($(".fhyx_cs_list li").eq($(".fhyx_cs_list li").length - 1));
        $(".fhyx_cs_list ul").css('left', '-225px');
        $(".fhyx_cs_list ul").animate({
            left: 0
        }, time, 'linear', function () {
            if(isIE){
                setTimeout(function(){animateRight(time)}, time)
            }else{
                setTimeout(animateRight(time), time)
            }
        })
    }
    $(".fhyx_cs_list ul").on('mouseenter', function () {
        $(".fhyx_cs_list ul").stop(true, false);
    });
    $(".fhyx_cs_list ul").on('mouseleave', function () {
        animateLeft(slow);
    });

    $(".fhyx_cs_right").on('mouseenter', function () {
        $(".fhyx_cs_list ul").stop(true, false);
        animateLeft(fastTime);
    });

    $(".fhyx_cs_right").on('mouseleave', function () {
        $(".fhyx_cs_list ul").stop(true, false);
        animateLeft(slow);
    });

    $(".fhyx_cs_left").on('mouseenter', function () {
        $(".fhyx_cs_list ul").stop(true, false);
        animateRight(fastTime);
    });

    $(".fhyx_cs_left").on('mouseleave', function () {
        $(".fhyx_cs_list ul").stop(true, false);
        animateLeft(slow);
    });
    function timeProgress(timeobj) {

        if (typeof showtime == "undefined") {
            var showtime = function () {
                var oDate = new Date();
                var iTime = oDate.getTime();
                if (timeobj.attr("data-endtime") - iTime > 0) {
                    timeobj.html(getlocalTime((timeobj.attr("data-endtime") - iTime) / 1000));
                } else {
                    timeobj.html("活动已结束");
                    clearInterval(timer);
                }
            }
        }
        showtime();
        var timer = setInterval(showtime, 1000);

    }

    $.each($(".m_showtime"), function (i, v) {
        timeProgress($(v));
    });

    function getlocalTime(oTime) {
        k = {
            D: oTime / 3600 / 24,
            H: oTime / 3600 % 24,
            M: oTime / 60 % 60,
            S: oTime % 60
        };
        return "还剩" + parseInt(k.D) + "天" + parseInt(k.H) + "时" + parseInt(k.M) + "分" + parseInt(k.S) + "秒";
    }
})();

//立即购买
$(".fhyxhk_index_buy").click(function(){

    var sc_login_ret = if_login_container(1);
    if(sc_login_ret==1){return;}

    var pid = $(this).attr("data-id");
    var outmainland = $(this).attr("data-outmainland");

    $.ajax({
        type:"GET",
        async:false,
        url: "/products/buy_temp",
        data:{rtype:1,pid:pid,num:1},
        dataType:"jsonp",
        jsonp : 'callback',
        jsonpCallback:"success_jsonpCallback",
        success: function(json){
            if(json[0].str==2){
                if (outmainland) {
                    location.href='/auction/order.html';
                }else{
                    http_host = http_host.replace("hk", "com");
                    location.href= 'https://'+http_host+'/auction/order.html';
                }
            }
        },error:function(){}

    });

});

//加入购物车
$(".fhyxhk_index_addcar").on("click",function () {

    var sc_login_ret = if_login_container(1);
    if(sc_login_ret==1){return;}

    var pid = $(this).attr("data-id");

    $.ajax({
        type:"GET",
        async:false,
        url: "/car/add",
        data:{pid:pid,pnum:1},
        dataType:"jsonp",
        jsonp : 'callback',
        jsonpCallback:"success_jsonpCallback",
        success: function(json){
            if(json[0].str==2){
                alert("加入购物车成功");
                location.href=location.href;
            }
        },error:function(){}

    });
})
